import logo from "../../assets/images/onepiece.png";
import "./Header.css";

interface HeaderProps {
	score: {
		score: number;
		bestScore: number;
	};
}

function Header({ score }: HeaderProps): React.JSX.Element {
	return (
		<header className="header">
			<div className="site-logo">
				<img src={logo} alt="One Piece" id="logo" />
				<h1>Memories</h1>
			</div>
			<div className="scores">
				<div>
					<span>Score:</span>
					<span>{score.score}</span>
				</div>
				<div>
					<span>Best Score:</span>
					<span>{score.bestScore}</span>
				</div>
			</div>
		</header>
	);
}

export default Header;
