import { useEffect, useState } from "react";
import { characters } from "../../characters";
import Card from "../Card/Card";
function Game() {
  const [cardsFlipped, setCardsFlipped] = useState<boolean>(false);
  const flipCards = () => {
    setCardsFlipped(true);
  };

  useEffect(() => {
    if (cardsFlipped) {
      const flipInterval = setInterval(() => setCardsFlipped(false), 1500);
      return () => clearInterval(flipInterval);
    }
  }, [cardsFlipped]);
  return (
    <div className="board">
      {characters.map((character) => (
        <Card
          key={character.id}
          character={character}
          isFlipped={cardsFlipped}
          flipCards={flipCards}
        />
      ))}
    </div>
  );
}

export default Game;
