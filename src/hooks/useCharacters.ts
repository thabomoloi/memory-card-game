import { useEffect, useState } from "react";
import { Character } from "../utils/characters";
import { characters as chars } from "../utils/characters";
import shuffleCharacters from "../utils/shuffle";

function useCharacters() {
	const [characters, setCharacters] = useState<Character[]>(chars);
	const [shuffledCharacters, setShuffledCharacters] = useState<Character[]>([]);

	useEffect(() => {
		setShuffledCharacters(shuffleCharacters(characters));
	}, [characters]);

	// selects a character and update array
	const selectCharacter = (char: Character): boolean => {
		if (!char.selected) {
			const selected = true;
			setCharacters((prev) => [...prev, { ...char, selected }]);
			return true;
		}
		return false;
	};

	return { characters: shuffledCharacters, selectCharacter };
}

export default useCharacters;
