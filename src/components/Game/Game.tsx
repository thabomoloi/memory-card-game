import { useEffect, useState } from "react";
import { characters } from "../../characters";
import Card from "../Card/Card";
import flipSound from "../../assets/sounds/conqueror_haki_luffy.mp3";

import "./Game.css";

type GameProps = {
  soundMuted: boolean;
};

function Game({ soundMuted }: GameProps) {
  const [cardsFlipped, setCardsFlipped] = useState<boolean>(false);

  useEffect(() => {
    if (cardsFlipped) {
      setTimeout(() => setCardsFlipped(false), 1500);
    }
  }, [cardsFlipped]);

  const flipCards = () => {
    if (!cardsFlipped && !soundMuted) {
      const flipAudio = new Audio(flipSound);
      flipAudio.currentTime = 1;
      flipAudio.play();
      setTimeout(() => flipAudio.pause(), 3250);
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
