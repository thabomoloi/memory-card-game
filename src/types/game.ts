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

/** Represents the background sound. */
interface BackgroundSound {
  /** Represents whether background sound is on/off */
  muted: boolean;
  /** Turns background sound off */
  mute: () => void;
  /** Turns background sound on */
  unmute: () => void;
}

export type { GameState, Score, BackgroundSound };
