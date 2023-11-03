import "./GameStart.css";

interface GameStartProps {
  handleStartGame: () => void;
}

function GameStart({ handleStartGame }: GameStartProps): React.JSX.Element {
  return (
    <div className="menu-container">
      <div className="menu-modal">
        <div className="menu-content">
          <div>
            <p>
              Welcome to the world of One Piece! It's a beautiful day in the
              Grand Line, but there's a problem. Noko the mischievous seahorse
              has stolen your precious memories! Without your memories, you
              won't remember the incredible adventures you've had with your
              favorite One Piece characters, and you won't be able to save your
              beloved nakamas.
            </p>
            <p>
              But don't worry, because you have a chance to retrieve those
              memories and reunite with your friends. In this thrilling memory
              card game, you will choose a character in the given cards to piece
              together your past and save your nakamas. However, there's a
              catch: you can't choose the same character more than once. Each
              card you match will bring you one step closer to restoring your
              memories and rekindling the bonds with the Straw Hat Pirates and
              other beloved characters.
            </p>
            <p>
              Are you ready to embark on this unforgettable journey and reclaim
              your lost memories? Let's set sail and save the day with the power
              of friendship, adventure, and your love for One Piece!
            </p>
          </div>
          <button className="btn" onClick={handleStartGame}>
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameStart;
