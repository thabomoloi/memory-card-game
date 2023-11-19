import { useReducer } from "react";
import bestScore from "../utils/bestScore";

interface ScoreState {
	score: number;
	bestScore: number;
}

type ScoreAction = { type: "INCREMENT" | "RESET" };

function reducer(state: ScoreState, action: ScoreAction): ScoreState {
	switch (action.type) {
		case "INCREMENT":
			const score = state.score + 1;
			const best = Math.max(score, bestScore.getValue());
			if (best > score) bestScore.setValue(best);
			return { score, bestScore: best };
		case "RESET":
			return { score: 0, bestScore: bestScore.getValue() };
		default:
			return state;
	}
}

interface UseScore extends ScoreState {
	incrementScore: () => void;
	resetScore: () => void;
}

function useScore(): UseScore {
	const [state, dispatch] = useReducer(reducer, {
		score: 0,
		bestScore: bestScore.getValue(),
	});

	const incrementScore = () => dispatch({ type: "INCREMENT" });
	const resetScore = () => dispatch({ type: "RESET" });

	return { ...state, incrementScore, resetScore };
}

export default useScore;
