import {v4 as uuidv4} from "uuid";
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
    id: string,
    name: string,
    imageSrc: string,
    selected: boolean
}

const characters: Character[] = [
    {
        id: uuidv4(),
        name: "Brook",
        imageSrc: brook,
        selected: false
    },
    {
        id: uuidv4(),
        name: "Chopper",
        imageSrc: chopper,
        selected: false
    },
    {
        id: uuidv4(),
        name: "Franky",
        imageSrc: franky,
        selected: false
    },
    {
        id: uuidv4(),
        name: "Jimbei",
        imageSrc: jimbei,
        selected: false
    },
    {
        id: uuidv4(),
        name: "Luffy",
        imageSrc: luffy,
        selected: false
    },
    {
        id: uuidv4(),
        name: "Nami",
        imageSrc: nami,
        selected: false
    },
    {
        id: uuidv4(),
        name: "Robin",
        imageSrc: robin,
        selected: false
    },
    {
        id: uuidv4(),
        name: "Sanji",
        imageSrc: sanji,
        selected: false
    },
    {
        id: uuidv4(),
        name: "Ussop",
        imageSrc: ussop,
        selected: false
    },
    {
        id: uuidv4(),
        name: "Zoro",
        imageSrc: zoro,
        selected: false
    },
]

export { characters };
export type { Character };
