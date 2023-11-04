import logo from "../../assets/images/onepiecelogo.png";
import "./Header.css";

interface HeaderProps {
  score: number;
  bestScore: number;
}

function Header({ score, bestScore }: HeaderProps): React.JSX.Element {
  return (
    <header className="header">
      <div className="site-logo">
        <img src={logo} alt="One Piece" id="logo" />
        <h1>Memories</h1>
      </div>
      <div className="scores">
        <span>Score:</span>
        <span>{score}</span>
        <span>Best Score:</span>
        <span>{bestScore}</span>
      </div>
    </header>
  );
}

export default Header;
