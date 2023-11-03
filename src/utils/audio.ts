import flipSound from "../assets/sounds/conqueror_haki_luffy.mp3";
import menuSound from "../assets/sounds/overtaken_one_piece.mp3";
import backgroundSound from "../assets/sounds/zephyr.mp3";

const flipAudio: HTMLAudioElement = new Audio(flipSound);
flipAudio.volume = 0.5;

const menuAudio: HTMLAudioElement = new Audio(menuSound);
menuAudio.volume = 0.2;
menuAudio.loop = true;

const backgroundAudio: HTMLAudioElement = new Audio(backgroundSound);
backgroundAudio.volume = 0.2;
backgroundAudio.loop = true;

export { flipAudio, menuAudio, backgroundAudio };
