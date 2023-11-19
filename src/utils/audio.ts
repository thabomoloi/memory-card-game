import flipSound from "../assets/sounds/conqueror_haki_luffy.mp3";
import menuSound from "../assets/sounds/overtaken_one_piece.mp3";
import backgroundSound from "../assets/sounds/zephyr.mp3";

class GameSound {
	private audio: HTMLAudioElement;
	private currentTime: number;

	constructor(
		sound: string,
		volume: number,
		loop: boolean = false,
		currentTime: number = 0
	) {
		this.audio = new Audio(sound);
		this.audio.volume = volume;
		this.audio.loop = loop;
		this.audio.muted = false;
		this.currentTime = currentTime;
	}
	isMuted(): boolean {
		return this.audio.muted;
	}
	mute(): void {
		this.audio.muted = true;
	}
	unmute(): void {
		this.audio.muted = false;
	}
	pause(): void {
		this.audio.pause();
	}
	play(): void {
		this.audio.currentTime = this.currentTime;
		if (!this.isMuted()) this.audio.play();
	}
}

const flipAudio = new GameSound(flipSound, 0.5, false, 1);
const menuAudio = new GameSound(menuSound, 0.2, true, 3);
const backgroundAudio = new GameSound(backgroundSound, 0.2, true);

export { flipAudio, menuAudio, backgroundAudio };
