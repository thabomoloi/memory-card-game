import { useEffect, useState } from "react";
import loadingImage from "./assets/images/luffy-gear-5.gif";
import "./App.css";
import Game from "./components/Game/Game";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadingInterval = setInterval(() => setIsLoading(false), 5000);

    return () => clearInterval(loadingInterval);
  }, []);
  return (
    <>
      {isLoading && (
        <div id="loading-game">
          <img src={loadingImage} alt="Loading..." />
        </div>
      )}
      {!isLoading && <Game />}
    </>
  );
}

export default App;
