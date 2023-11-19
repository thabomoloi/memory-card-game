/** Represents the state of the game. */
enum GameState {
  /** Home page */
  Home,
  /** Menu page. */
  Menu,
  /** Game is playing. */
  Playing,
  /** The player has lost the game. */
  GameOver,
  /** The player has won the game. */
  Victory,
}

/** Represents scores of the game. */
interface Score {
  /** Score of the game. */
  score: number;
  /** The best score. */
  bestScore: number;
  /** Increase the score by 1. */
  incrementScore: () => void;
  /** Increase the best score by 1. */
  increaseBestScore: () => void;
}

/** Represents the sound. */
interface Sound {
  /** Represents the audio element. */
  audio: HTMLAudioElement;
  /** Represents whether the sound is on/off */
  muted: boolean;
  /** Checks if sound is muted */
  isMuted(): boolean;
  /** Turns background sound off */
  mute(): void;
  /** Turns background sound on */
  unmute(): void;
  /** Plays sound if not muted. */
  play(): void;
  /** Pause the sound. */
  pause(): void;
}

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

export type { GameState, Score, Sound, Character };
