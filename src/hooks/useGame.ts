import { useEffect, useState } from "react";
import { useScore } from ".";
import { GameState } from "../types/game";
import { menuAudio, backgroundAudio } from "../utils/audio";

function useGame() {
	const score = useScore();
	const [gameState, setGameState] = useState<GameState>(GameState.Home);
	const [soundMuted, setSoundMuted] = useState<boolean>(false);

	useEffect(() => {
		if (soundMuted) {
			backgroundAudio.mute();
			menuAudio.mute();
		} else {
			backgroundAudio.unmute();
			menuAudio.unmute();
		}
		switch (gameState) {
			case GameState.Menu:
			case GameState.GameOver:
				backgroundAudio.pause();
				menuAudio.play();
				break;
			case GameState.Playing:
				menuAudio.pause();
				backgroundAudio.play();
				break;
			default:
				break;
		}
	}, [soundMuted, gameState]);

	// sound functions
	const mute = () => setSoundMuted(true);
	const unmute = () => setSoundMuted(false);

	// game navigation
	const goToHomePage = () => setGameState(GameState.Home);
	const goToMenuPage = () => setGameState(GameState.Menu);
	const goToGamePage = () => setGameState(GameState.Playing);
	const endGame = (win: boolean) =>
		setGameState(win ? GameState.Victory : GameState.GameOver);
	const restartGame = () => {
		score.resetScore();
		goToGamePage();
	};

	return {
		score,
		sound: {
			soundMuted,
			mute,
			unmute,
		},
		game: {
			gameState,
			goToGamePage,
			goToHomePage,
			goToMenuPage,
			endGame,
			restartGame,
		},
	};
}

export default useGame;
