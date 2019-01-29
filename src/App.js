import React, { Component } from 'react';
import './App.css';
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Cards from "./components/Cards";
import {shuffle} from "lodash";
// import $ from 'jquery'; 
// import "./components/Game";
class App extends Component {
//Guessed correctly - status: false
  state = {
    topScore: 0,
    clickedCards: [],
    status: false
  };


render() {
  return(
 <Wrapper>
    <Nav />
    <Header />
    <Cards images={images}/>
  </Wrapper>
)}}

const images = [
  {
    id: 1,
    name: "Yungstar",
    image:
      "/images/yungstar.jpg"
  },
  {
    id: 2,
    name: "Big Tymers",
    image:
      "/images/bt1.jpg"
  },
  {
    id: 3,
    name: "Chopper City",
    image:
      "/images/choppercity.jpg"
  },
  {
    id: 4,
    name: "Hot Boys",
    image:
      "/images/hotboys.jpg"
  },
  {
    id: 5,
    name: "Lil Wayne",
    image:
      "/images/lilwayne.jpg"
  },
  {
    id: 6,
    name: "Master P",
    image:
      "/images/masterp.jpg"
  },
  {
    id: 7,
    name: "Playa G",
    image:
      "/images/playg.jpg"
  },
  {
    id: 8,
    name: "Mr. Servon",
    image:
      "/images/servon.jpg"
  },
  {
    id: 9,
    name: "Silkk Tha Shocker",
    image:
      "/images/silkk.jpg"
  },
  {
    id: 10,
    name: "Snoop Dogg",
    image:
      "/images/snoop.jpeg"
  },
  {
    id: 11,
    name: "UNLV",
    image:
      "/images/unlv.jpg"
  },
  {
    id: 12,
    name: "Dr. Dooom",
    image:
      "/images/drdooom.jpg"
  },
  {
    id: 13,
    name: "Kingpin Skinny Pimp",
    image:
      "/images/kpsp.jpg"
  },
  {
    id: 14,
    name: "Three 6 Mafia",
    image:
      "/images/teardaclub.jpg"
  },
  {
    id: 15,
    name: "8Ball & MJG",
    image:
      "/images/8ball.jpg"
  },
  {
    id: 16,
    name: "Soulja Slim",
    image:
      "/images/soulja.jpg"
  }
]
                  
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
