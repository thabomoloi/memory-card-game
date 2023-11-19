import logo from "../../assets/images/onepiecelogo.png";
import "./Home.css";

interface HomeProps {
	handlePlayGame: () => void;
}

function Home({ handlePlayGame }: HomeProps): React.JSX.Element {
	return (
		<div className="menu-container">
			<div className="menu">
				<header className="menu-header">
					<div className="game-name">
						<img src={logo} alt="One Piece" id="logo" />
						<h1>Memories</h1>
					</div>
				</header>
				<p> Do You Want To Play Game?</p>
				<button onClick={handlePlayGame}>Play</button>
			</div>
		</div>
	);
}

export default Home;
