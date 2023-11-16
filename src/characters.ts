import { v4 as uuidv4 } from "uuid";

type Character = {
  /**
   * Unique identifier for the character.
   */
  id: string;
  /**
   * The name of the character.
   */
  name: string;
  /**
   * The absolute path of the image of the character.
   */
  imageSrc: string;
  /**
   * The boolean to indicate if the user has been selected.
   */
  selected: boolean;
};

type CharacterImage = {
  /**
   * The absolute path of the image of the character.
   */
  default: string;
};

const characters: Character[] = [];

/**
 * Gets the name of the character from a  file name.
 * @param fileName The name of the image
 * @returns The name of the character
 */
function getCharacterName(fileName: string): string {
  const match = fileName.match(/^([A-Za-z\.\s]+)-[a-f0-9]+$/);
  if (match) return match[1];
  return fileName;
}

/**
 * Retrieves the filename from the given path to the file.
 * @param filePath The path to the file.
 * @returns The file name without extension.
 */
function getFileName(filePath: string): string {
  const pathParts: string[] = filePath.split("/");
  const fileNameWithExtension: string = pathParts[pathParts.length - 1];
  const fileName: string = fileNameWithExtension
    .split(".")
    .slice(0, -1)
    .join(".");
  return fileName;
}

/**
 * Create and add a character to an array.
 * @param image The image of the character.
 */
function addCharacterToArray(image: CharacterImage) {
  const fileName: string = getFileName(image.default).toLowerCase();
  const characterName: string = getCharacterName(fileName);

  characters.push({
    id: uuidv4(),
    name: characterName,
    imageSrc: image.default,
    selected: false,
  });
}

/**
 * Imports all character images from a folder and adds all
 * the characters to an array.
 */
function createCharacters() {
  const images = import.meta.glob<CharacterImage>(
    "./assets/images/characters/*"
  );
  for (const path in images) {
    images[path]().then(addCharacterToArray);
  }
}

createCharacters();

export { characters };
export type { Character };
