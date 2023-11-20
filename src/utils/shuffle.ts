import { Character } from "./characters";

/**
 * Shuffles the characters array using Fisher–Yates shuffle Algorithm.
 *
 * @param array The array of characters.
 * @returns The shuffled array.
 */
function shuffle(array: Character[]): Character[] {
	// create a copy of the original array
	const shuffledArray: Character[] = array.slice();

	const n = shuffledArray.length;

	// Start from the last element and swap one by one.
	for (let index = n - 1, randomIndex; index > 0; index--) {
		randomIndex = Math.floor(Math.random() * (index + 1));
		// swap element at current index with the one at random index
		[shuffledArray[index], shuffledArray[randomIndex]] = [
			shuffledArray[randomIndex],
			shuffledArray[index],
		];
	}
	return shuffledArray;
}

/**
 * Shuffles array of characters. ensures that at least one selected character
 * (if any) and one character not selected (if any) are part of the shuffled array.
 *
 * @param array The array of characters.
 * @returns An shuffled array of characters
 */
function shuffleCharacters(arr: Character[]): Character[] {
	const array: Character[] = shuffle(arr);
	const selected: Character[] = array.filter((char) => char.selected);
	const notSelected: Character[] = array.filter((char) => !char.selected);

	// shuffle characters selected and not selected separately
	const selectedShuffled: Character[] = shuffle(selected);
	const notSelectedShuffled: Character[] = shuffle(notSelected);

	// create empty shuffle array
	const shuffledArray: Character[] = [];

	let n: number = selectedShuffled.length,
		m: number = notSelectedShuffled.length;

	// for each character add:
	// - selected character to array if index < n
	// - character not selected to array index < m
	for (let index = 0; index < n || index < m; index++) {
		if (index < n) shuffledArray.push(selected[index]);
		if (index < m) shuffledArray.push(notSelected[index]);
	}

	return shuffledArray;
}

export default shuffleCharacters;
