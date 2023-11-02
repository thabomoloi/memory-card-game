import { useEffect, useState } from "react";
import loadingImage from "./assets/images/luffy-gear-5.gif";
import backgroundSound from "./assets/sounds/overtaken_one_piece.mp3";

import "./App.css";
import Game from "./components/Game/Game";

enum GameState {
  Menu,
  Playing,
  GameOver,
}

function App() {
  const backgroundAudio = new Audio(backgroundSound);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [soundMuted, setSoundMuted] = useState<boolean>(false);
  const [gameState, setGameState] = useState<GameState>(GameState.Menu);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 5000);
  }, [isLoading, soundMuted]);

  const startGame = () => {
    setGameState(GameState.Playing);
    backgroundAudio.currentTime = 0;
    backgroundAudio.loop = true;
    backgroundAudio.play();
  };
  return (
    <>
      {isLoading && (
        <div id="loading-game">
          <img src={loadingImage} alt="Loading..." />
        </div>
      )}
      {!isLoading && <Game soundMuted={soundMuted} />}
    </>
  );
}

export default App;
