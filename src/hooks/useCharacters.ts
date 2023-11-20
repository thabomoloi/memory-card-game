import { useEffect, useState } from "react";
import { Character } from "../utils/characters";
import { characters as chars } from "../utils/characters";
import shuffleCharacters from "../utils/shuffle";

function useCharacters() {
	const [characters, setCharacters] = useState<Character[]>(chars);
	const [shuffledCharacters, setShuffledCharacters] = useState<Character[]>(
		[]
	);
	const [allSelected, setAllSelected] = useState<boolean>();

	useEffect(() => {
		setShuffledCharacters(shuffleCharacters(characters));
		const selectedCharacters = characters.filter((char) => char.selected);
		setAllSelected(selectedCharacters.length === characters.length);
	}, [characters]);

	// selects a character and update array
	const selectCharacter = (char: Character): boolean => {
		if (!char.selected) {
			const selected = true;
			const index = characters.findIndex((item) => item.id === char.id);
			const updatedCharacters = [...characters];

			if (index !== -1) {
				updatedCharacters[index] = { ...char, selected };
				setCharacters(updatedCharacters);
				return true;
			}
		}
		return false;
	};

	const resetCharacters = (): void => {
		const updatedCharacters: Character[] = characters.map<Character>(
			(char) => ({
				...char,
				selected: false,
			})
		);
		setCharacters(updatedCharacters);
	};
	return {
		characters: shuffledCharacters,
		allSelected,
		selectCharacter,
		resetCharacters,
	};
}

export default useCharacters;
