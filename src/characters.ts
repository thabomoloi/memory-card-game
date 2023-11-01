import { v4 as uuidv4 } from "uuid";
import brook from "./assets/images/characters/brook.png";
import chopper from "./assets/images/characters/chopper.png";
import franky from "./assets/images/characters/franky.png";
import jimbei from "./assets/images/characters/jimbei.png";
import luffy from "./assets/images/characters/luffy.png";
import nami from "./assets/images/characters/nami.png";
import robin from "./assets/images/characters/robin.png";
import sanji from "./assets/images/characters/sanji.png";
import ussop from "./assets/images/characters/usopp.png";
import zoro from "./assets/images/characters/zoro.png";

type Character = {
  id: string;
  name: string;
  imageSrc: string;
  selected: boolean;
};

type CharacterImage = {
  default: string;
};

const characters: Character[] = [];

function getFileName(filePath: string): string {
  const pathParts = filePath.split("/"); // Split the path by '/'
  const fileNameWithExtension = pathParts[pathParts.length - 1]; // Get the last part (the file name)
  const fileName = fileNameWithExtension.split(".").slice(0, -1).join("."); // Remove the file extension
  const capitalizedFileName =
    fileName.charAt(0).toUpperCase() + fileName.slice(1); // Capitalize the name
  return capitalizedFileName;
}

function createCharacters() {
  const images = import.meta.glob<CharacterImage>(
    "./assets/images/characters/*"
  );
  for (const path in images) {
    images[path]().then((image) => {
      characters.push({
        id: uuidv4(),
        name: getFileName(path),
        imageSrc: image.default,
        selected: false,
      });
    });
  }
}

createCharacters();

export { characters };
export type { Character };
