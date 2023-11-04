import { useEffect, useState } from "react";
import { backgroundAudio, menuAudio } from "./utils/audio";
import Game from "./components/Game/Game";
import GameStart from "./components/GameStart/GameStart";
import "./App.css";
import GameMenu from "./components/GameMenu/GameMenu";

enum GameState {
  Menu,
  Start,
  Playing,
  GameOver,
  Victory,
}

function App() {
  const [soundMuted, setSoundMuted] = useState<boolean>(false);
  const [gameState, setGameState] = useState<GameState>(GameState.Menu);

  useEffect(() => {
    if (!soundMuted) {
      switch (gameState) {
        case GameState.Start:
          menuAudio.play();
          backgroundAudio.pause();
          break;
        case GameState.Playing:
          backgroundAudio.play();
          menuAudio.pause();
          break;
        default:
          break;
      }
    } else {
      backgroundAudio.pause();
      menuAudio.pause();
    }
  }, [soundMuted, gameState]);
  const handleStartGame = (): void => {
    setGameState(GameState.Playing);
  };

  const handlePlayGame = (): void => {
    setGameState(GameState.Start);
    if (!soundMuted) {
      menuAudio.play();
    }
  };
  return (
    <>
      {gameState === GameState.Menu && (
        <GameMenu handlePlayGame={handlePlayGame} />
      )}
      {gameState == GameState.Start && (
        <GameStart handleStartGame={handleStartGame} />
      )}
      {gameState == GameState.Playing && <Game soundMuted={soundMuted} />}
    </>
  );
}

export default App;
