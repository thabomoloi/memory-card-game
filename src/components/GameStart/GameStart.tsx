import "./GameStart.css";

interface GameStartProps {
  handleStartGame: () => void;
}

function GameStart({ handleStartGame }: GameStartProps): React.JSX.Element {
  return (
    <div className="menu-container">
      <div className="menu-modal">
        <div className="content-container">
          <div className="menu-content">
            <div>
              <p>
                Your memories have been stolen by a mischievous seahorse named
                Noko. Without them, you can't recall your adventures with One
                Piece characters or save your friends. Play our memory card game
                to match characters, piece your past together, and reunite with
                your nakamas. But beware: you can't pick the same character
                twice. Restore your memories, relive adventures, and strengthen
                bonds with the Straw Hat Pirates. Ready to set sail and save the
                day with friendship and adventure? Let's go!
              </p>
            </div>
            <button className="btn" onClick={handleStartGame}>
              Start Game
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameStart;
