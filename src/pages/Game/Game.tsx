import { useEffect, useState, useRef } from "react";
import { Score, Character, GameState } from "../../types/game";
import { flipAudio } from "../../utils/audio";
import logo from "../../assets/images/onepiece.png";
import { useCharacters } from "../../hooks";
import "./Game.css";

interface CardProps {
	character: Character;
	cardsFlipped: boolean;
	handleCharacterSelect: (character: Character) => void;
}
function Card({ character, cardsFlipped, handleCharacterSelect }: CardProps) {
	const cardInnerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (cardInnerRef.current) {
			const { classList } = cardInnerRef.current;
			cardsFlipped ? classList.add("flip") : classList.remove("flip");
		}
	}, [cardsFlipped]);

	return (
		<div
			className="card"
			key={character.id}
			onClick={() => handleCharacterSelect(character)}
		>
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

interface GameProps {
	gameScore: Score;
	game: {
		gameState: GameState;
		goToGamePage: () => void;
		goToHomePage: () => void;
		goToMenuPage: () => void;
		endGame: (win: boolean) => void;
		restartGame: () => void;
	};
}

function Game({ gameScore, game }: GameProps) {
	const [cardsFlipped, setCardsFlipped] = useState<boolean>(false);
	const { characters, selectCharacter } = useCharacters();

	useEffect(() => {
		if (cardsFlipped) {
			setTimeout(() => setCardsFlipped(false), 1500);
		}
	}, [cardsFlipped]);

	// select card and update score
	const handleCharacterSelect = (character: Character): void => {
		const validSelection = selectCharacter(character);
		if (validSelection) {
			if (!cardsFlipped) {
				flipAudio.play();
				gameScore.incrementScore();
				setCardsFlipped(true);
			}
		} else {
			// lose game
			game.endGame(false);
		}
	};

	return (
		<div className="board-container">
			<div className="board">
				{characters.map((character) => (
					<Card
						key={character.id}
						character={character}
						cardsFlipped={cardsFlipped}
						handleCharacterSelect={handleCharacterSelect}
					/>
				))}
			</div>
		</div>
	);
}

export default Game;
