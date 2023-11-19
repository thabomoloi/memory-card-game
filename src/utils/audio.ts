import flipSound from "../assets/sounds/conqueror_haki_luffy.mp3";
import menuSound from "../assets/sounds/overtaken_one_piece.mp3";
import backgroundSound from "../assets/sounds/zephyr.mp3";

class GameSound {
  private audio: HTMLAudioElement;
  private muted: boolean;

  constructor(sound: string, volume: number, loop: boolean = false) {
    this.audio = new Audio(sound);
    this.audio.volume = volume;
    this.audio.loop = loop;
    this.muted = false;
  }
  isMuted(): boolean {
    return this.muted;
  }
  mute(): void {
    this.muted = true;
  }
  unmute(): void {
    this.muted = false;
  }
  pause(): void {
    this.audio.pause();
  }
  play(): void {
    if (!this.isMuted) this.audio.play();
  }
}

const flipAudio = new GameSound(flipSound, 0.5);
const menuAudio = new GameSound(menuSound, 0.2, true);
const backgroundAudio = new GameSound(backgroundSound, 0.2, true );

export { flipAudio, menuAudio, backgroundAudio };
