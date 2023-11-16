import { useEffect, useState } from "react";
import { backgroundAudio, menuAudio } from "./utils/audio";
import Game from "./components/Game/Game";
import GameStart from "./components/GameStart/GameStart";
import GameMenu from "./components/GameMenu/GameMenu";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Main from "./components/Main/Main";

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
  const [score, setScore] = useState<number>(0);
  const [bestScore, setBestScore] = useState<number>(0);

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

  useEffect(() => {
    setSoundMuted(false);
    setBestScore(0);
    setScore(0);
  }, []);

  const handlePlayGame = (): void => {
    setGameState(GameState.Start);
    if (!soundMuted) {
      menuAudio.currentTime = 3;
      menuAudio.play();
    }
  };
  return (
    // <>
    //   {gameState === GameState.Menu && (
    //     <GameMenu handlePlayGame={handlePlayGame} />
    //   )}
    //   {gameState !== GameState.Menu && (
    //     <>
    //       {/* <Header score={score} bestScore={bestScore} /> */}
    //       <main>
    //         {gameState == GameState.Start && (
    //           <GameStart handleStartGame={handleStartGame} />
    //         )}
    //         {gameState == GameState.Playing && <Game soundMuted={soundMuted} />}
    //       </main>
    //     </>
    //   )}
    //   {gameState === GameState.GameOver && (
    //     <Header score={score} bestScore={bestScore} />
    //   )}
    // </>
    <>
      <Header score={score} bestScore={bestScore} />
      <Main
        soundMuted={soundMuted}
        muteSound={() => setSoundMuted(true)}
        unmuteSound={() => setSoundMuted(false)}
      >
        {gameState === GameState.Menu && (
          <GameMenu handlePlayGame={handlePlayGame} />
        )}
        {gameState !== GameState.Menu && (
          <>
            {/* <Header score={score} bestScore={bestScore} /> */}
            <main>
              {gameState == GameState.Start && (
                <GameStart handleStartGame={handleStartGame} />
              )}
              {gameState == GameState.Playing && (
                <Game soundMuted={soundMuted} />
              )}
            </main>
          </>
        )}
      </Main>
      <Footer />
    </>
  );
}

export default App;
