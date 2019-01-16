import React from "react";
// import render from "./components/Game";


const Nav = props =>
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


export default Nav;
