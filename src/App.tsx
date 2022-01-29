import React, {useContext} from "react";
import "./App.css";
import { GameContext, GameProvider } from "./context/GameContext";
import Link from "./components/Link";
import NarrativeText from "./components/NarrativeText";
import BackgroundImage from "./components/BackgroundImage";


function App() {

  const gameState = useContext(GameContext); 
  const options = gameState.currentPassage?.links ?? [];

  return (
      <div className="App">
        <div className="night">
          {[...Array(30).keys()].map(_ =>
            <div className="shooting_star"></div>
          )}
        </div>

        <BackgroundImage
          src={`./art/backgrounds/${gameState.backgroundImage}.png`}
        />

        <NarrativeText text={gameState.currentPassage?.text} />

        <div className="LinksContainer">
          {options.map((option:Link, index) => {
            return(
              <Link text={option.name} nextPassageId={option.pid} key={index}/>
            )
          })}
        </div>
      </div>
  );
}

export default App;
