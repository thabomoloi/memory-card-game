import { useEffect, useState } from "react";
import { characters } from "../../utils/characters";
import Card from "../Card/Card";
import { flipAudio } from "../../utils/audio";
import "./Game.css";

function Game() {
  const [cardsFlipped, setCardsFlipped] = useState<boolean>(false);

  useEffect(() => {
    if (cardsFlipped) {
      setTimeout(() => setCardsFlipped(false), 1500);
    }
  }, [cardsFlipped]);

  const flipCards = () => {
    if (!cardsFlipped) {
      flipAudio.currentTime = 0.9;
      flipAudio.play();
    }
    setCardsFlipped(true);
  };

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
