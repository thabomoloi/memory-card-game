import { ReactNode, JSX } from "react";
import musicOnIcon from "../../assets/images/music-note.svg";
import musicOffIcon from "../../assets/images/music-note-off.svg";
import "./Main.css";

interface MainProps extends React.PropsWithChildren {
  soundMuted: boolean;
  muteSound: () => void;
  unmuteSound: () => void;
  children: ReactNode;
}

function Main({
  soundMuted,
  muteSound,
  unmuteSound,
  children,
}: MainProps): JSX.Element {
  return (
    <main className="main">
      <div className="content">{children}</div>
      <button
        className="sound-btn"
        onClick={() => (soundMuted ? unmuteSound() : muteSound())}
      >
        <img
          src={soundMuted ? musicOnIcon : musicOffIcon}
          alt={soundMuted ? "Music On" : "Music Off"}
          title={soundMuted ? "Unmute music" : "Mute music"}
        />
      </button>
    </main>
  );
}

export default Main;
