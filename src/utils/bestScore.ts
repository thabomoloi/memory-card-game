/** Represents best score functions */
interface BestScore {
	/**
	 * Key for the best score in local storage.
	 */
	readonly storageKey: string;
	/**
	 * Save best score to local storage.
	 * @param score The value to save.
	 */
	setValue: (score: number) => void;
	/**
	 * Gets the save best score from local storage.
	 * @returns The best score.
	 */
	getValue(): number;
}

class Score implements BestScore {
	storageKey: string;
	private static instance: Score;
	private constructor() {
		this.storageKey = "bestScore";
	}
	static getInstance() {
		if (this.instance === undefined) {
			this.instance = new Score();
		}
		return this.instance;
	}
	setValue(score: number): void {
		localStorage.setItem(this.storageKey, score.toString());
	}
	getValue(): number {
		const savedScore: string | null = localStorage.getItem(this.storageKey);
		const score: number = parseInt(savedScore ?? "0");
		return Number.isNaN(score) ? 0 : score;
	}
}

const bestScore: Score = Score.getInstance();

export default bestScore;
