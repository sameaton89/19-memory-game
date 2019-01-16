import React from "react";
// import render from "./components/Game";


const Main = () => (
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
);

//   // The render method returns the JSX that should be rendered
//  const render = () => {
//     return (
//       <div className="card text-center">
//         <div className="card-header bg-primary text-white">
//           Click Counter!
//         </div>
//         <div className="card-body">
//           <p className="card-text">Click Count: {this.state.count}</p>
//           <button className="btn btn-primary" onClick={this.handleIncrement}>
//             Increment
//           </button>
//         </div>
//       </div>
//     );
//   }
// render();


export default Main;
