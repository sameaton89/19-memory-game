import React from 'react';
import './App.css';
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Cards from "./components/Cards";
import albums from "./albums.json";
// import $ from 'jquery'; 
// import "./components/Game";

const App = () => (
  <Wrapper>
    <Nav />
    <Header />
    <Cards
      name={albums[0].name}
      image={albums[0].image}
    />
    <Cards
      name={albums[1].name}
      image={albums[1].image}
    />
    <Cards
      name={albums[2].name}
      image={albums[2].image}
    />
    <Cards
      name={albums[3].name}
      image={albums[3].image}
    />
    <Cards
      name={albums[4].name}
      image={albums[4].image}
    />
    <Cards
      name={albums[5].name}
      image={albums[5].image}
    />
    <Cards
      name={albums[6].name}
      image={albums[6].image}
    />
    <Cards
      name={albums[7].name}
      image={albums[7].image}
    />
    <Cards
      name={albums[8].name}
      image={albums[8].image}
    />
    <Cards
      name={albums[9].name}
      image={albums[9].image}
    />
    <Cards
      name={albums[10].name}
      image={albums[10].image}
    />   
    <Cards
    name={albums[11].name}
    image={albums[11].image}
  />
     <Cards
    name={albums[12].name}
    image={albums[12].image}
  />
     <Cards
    name={albums[13].name}
    image={albums[13].image}
  />
     <Cards
    name={albums[14].name}
    image={albums[14].image}
  />
     <Cards
    name={albums[15].name}
    image={albums[15].image}
  />

  </Wrapper>
)
                  
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
