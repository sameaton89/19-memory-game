import React from "react";
import shuffle from "lodash";
// import render from "./components/Game";

// By extending the React.Component class, Counter inherits functionality from it
class Counter extends React.Component {
    // Setting the initial state of the Counter component
    state = {
      topScore: 99,
      clickedcards: [],
      status: false,
      guessedCorrectly: false
    };
  
    shuffleCards = () => {
      
    }

render() {
    return (
        <div className="container">
    <nav className="nav-bar">
    Memory Game
        <div id="game-message">
        </div>
        <div id="current-score">
        Score: 
        </div>
        <div id="high-score">
        High Score: 
        </div>
    </nav>
    <header className="header">
    Clicking the unclicked image will earn you points. Clicking the same image twice will earn you a game over.
    </header>
    <div className="container" id="images">
    </div>
</div>
    )
}

}

export default Main;
