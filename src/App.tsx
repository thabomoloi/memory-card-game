import { useEffect, useState } from "react";
import loadingImage from "./assets/images/luffy-gear-5.gif";
import backgroundSound from "./assets/sounds/overtaken_one_piece.mp3";

import "./App.css";
import Game from "./components/Game/Game";
import Menu from "./components/Menu/Menu";

enum GameState {
  Loading,
  Menu,
  Playing,
  GameOver,
}

function App() {
  const backgroundAudio = new Audio(backgroundSound);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [soundMuted, setSoundMuted] = useState<boolean>(false);
  const [gameState, setGameState] = useState<GameState>(GameState.Loading);

  useEffect(() => {
    setTimeout(() => setGameState(GameState.Menu), 5000);
  }, [isLoading, soundMuted]);

  const handleStartGame = () => {
    setGameState(GameState.Playing);
    backgroundAudio.currentTime = 0;
    backgroundAudio.loop = true;
    backgroundAudio.play();
  };
  return (
    <>
      {gameState == GameState.Loading && (
        <div id="loading-game">
          <img src={loadingImage} alt="Loading..." />
        </div>
      )}
      {gameState == GameState.Menu && (
        <Menu handleStartGame={handleStartGame} />
      )}
      {gameState == GameState.Playing && <Game soundMuted={soundMuted} />}
    </>
  );
}

export default App;
