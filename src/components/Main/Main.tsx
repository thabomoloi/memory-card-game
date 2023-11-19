import { ReactNode, JSX } from "react";
import musicOnIcon from "../../assets/images/music-note.svg";
import musicOffIcon from "../../assets/images/music-note-off.svg";
import "./Main.css";

interface MainProps extends React.PropsWithChildren {
	sound: {
		soundMuted: boolean;
		mute: () => void;
		unmute: () => void;
	};
	children: ReactNode;
}

function Main({ sound, children }: MainProps): JSX.Element {
	return (
		<main className="main">
			<div className="content">{children}</div>
			<button
				className="sound-btn"
				onClick={() =>
					sound.soundMuted ? sound.unmute() : sound.mute()
				}
			>
				<img
					src={sound.soundMuted ? musicOnIcon : musicOffIcon}
					alt={sound.soundMuted ? "Music On" : "Music Off"}
					title={sound.soundMuted ? "Unmute music" : "Mute music"}
				/>
			</button>
		</main>
	);
}

export default Main;
