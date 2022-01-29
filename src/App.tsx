import React, {useContext} from "react";
import "./App.css";
import { GameContext } from "./context/GameContext";
import Link from "./components/Link";
import NarrativeText from "./components/NarrativeText";
import BackgroundImage from "./components/BackgroundImage";

import binary from "./assets/art/backgrounds/single.png";
import ReactAudioPlayer from "react-audio-player";

function App() {

  const gameState = useContext(GameContext); 
  const options = gameState.currentPassage?.links ?? [];

  return (
      <div className="App">
        <ReactAudioPlayer src="sound/music/godcomplex.mp3" autoPlay loop />
        <ReactAudioPlayer src={"sound/voiceover/english/"+ gameState.currentPassage?.name + ".m4a"} autoPlay volume={1.0} />

        <div className="night">
          {[...Array(30).keys()].map(_ =>
            <div className="shooting_star"></div>
          )}
        </div>

        <BackgroundImage
          src={binary}
        />

        <NarrativeText text={gameState.currentPassage?.text} />

        <div className="LinksContainer">
          {options.map((option:Link, index) => {
            return(
              <Link text={option.name} nextPassageId={option.pid} key={index} />
            )
          })}
        </div>
      </div>
  );
}

export default App;
