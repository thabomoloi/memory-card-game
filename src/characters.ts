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

const characters: Character[] = [];

function createCharacters() {
  const images = import.meta.glob("./assets/images/characters/*");
  for (const path in images) {
    images[path]().then((image) => {
      console.log(path, image);
    });
  }
}

createCharacters();

export { characters };
export type { Character };
