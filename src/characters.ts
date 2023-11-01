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
  const name: string = getFileName(image.default).toLowerCase();
  characters.push({
    id: uuidv4(),
    name: name,
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
