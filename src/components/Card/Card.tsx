import { useRef } from "react";
import { Character } from "../../utils/characters";
import logo from "../../assets/images/onepiece.png";
import "./Card.css";

type CardProps = {
  /** The character to display on the card */
  character: Character;
  /** State whether the card is flipped or not */
  isFlipped: boolean;
  /** Callback function to flip all cards in the game */
  flipCards: () => void;
};

function Card({ character, isFlipped, flipCards }: CardProps) {
  const cardInnerRef = useRef<HTMLDivElement>(null);

  if (cardInnerRef.current) {
    cardInnerRef.current.style.transform = isFlipped ? "rotateY(180deg)" : "";
    cardInnerRef.current.style.boxShadow = isFlipped
      ? "-3px 3px 2px 2px rgba(20, 20, 20, 0.75)"
      : "";
  }

  return (
    <div className="card" onClick={flipCards}>
      <div className="card-inner" ref={cardInnerRef}>
        <div className="card-front">
          <div className="details">
            <img src={character.imageSrc} alt={character.name} />
            <span>{character.name}</span>
          </div>
        </div>
        <div className="card-back">
          <img src={logo} alt="One piece logo" />
        </div>
      </div>
    </div>
  );
}

export default Card;
