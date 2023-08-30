import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import GamePlay from "./components/GamePlay";

function App() {
  const [startGame, setStartGame] = useState(false);
  const toggleGame = () => {
    setStartGame(!startGame);
  };
  return <>{!startGame ? <Home toggleGame={toggleGame} /> : <GamePlay />}</>;
}

export default App;
