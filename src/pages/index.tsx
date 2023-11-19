import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import { useGame } from "../hooks";
import { GameState } from "../types/game";
import Game from "./Game/Game";
import Home from "./Home/Home";
import Menu from "./Menu/Menu";
import "./index.css";
function App(): React.JSX.Element {
	const { score, sound, game } = useGame();
	return (
		<div className="app">
			{game.gameState === GameState.Playing && (
				<Header score={score.score} bestScore={score.bestScore} />
			)}
			<Main sound={sound}>
				{game.gameState === GameState.Home && (
					<Home handlePlayGame={game.goToMenuPage} />
				)}
				{game.gameState === GameState.Menu && (
					<Menu handleStartGame={game.goToGamePage} />
				)}
				{game.gameState === GameState.Playing && (
					<Game gameScore={score} />
				)}
			</Main>
			<Footer />
		</div>
	);
}

export default App;
