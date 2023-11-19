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

	const showGamePage =
		game.gameState !== GameState.Home && game.gameState !== GameState.Menu;
	const showHomePage = game.gameState === GameState.Home;
	const showMenuPage = game.gameState === GameState.Menu;

	return (
		<div className="app">
			{showGamePage && <Header score={score} />}
			<Main sound={sound}>
				{showHomePage && <Home handlePlayGame={game.goToMenuPage} />}
				{showMenuPage && <Menu handleStartGame={game.goToGamePage} />}
				{showGamePage && <Game gameScore={score} game={game} />}
			</Main>
			<Footer />
		</div>
	);
}

export default App;
