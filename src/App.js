import React, { Component } from 'react';
import './App.css';
import './Style.css';
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Cards from "./components/Cards";
import {shuffle} from "lodash";
import albums from "./albums.json";

// import $ from 'jquery'; 
// import "./components/Game";
class App extends Component {
//Guessed correctly - status: false
  state = {
    topScore: 0,
    clickedCards: [],
    currentScore: 0,
    gameOver: false,
    status: "",
    albums
  };

render() {
  return(
 <Wrapper>
    <Nav />
      <div id="game-message">
          Status: {this.state.status}
          <br />
          Score: {this.state.currentScore}
          <br />
          High Score: {this.state.topScore}
      </div>
    <Header />
    

    {this.state.albums.map(album => (
          <Cards
            handleClicks={this.handleClicks}
            id={album.id}
            key={album.id}
            image={album.image}
          />

        ))}

  </Wrapper>
)}


handleClicks = (id) => {
  const clickArray = this.state.clickedCards; 
  clickArray.push({id}); 
  this.setState({
      clickedCards: clickArray
  })
    console.log(clickArray);
  console.log(this.state);
}

shuffleAlbums = id => {
  // Filter this.state.friends for friends with an id not equal to the id being removed
  // console.log(albums);
  // Set this.state.friends equal to the new friends array
  this.setState({ albums: shuffle(this.state.albums) });
  // console.log({id});
  // console.log(this.state.albums);

;
  


  this.setState({ currentScore: this.state.currentScore + 1 });

};

resetGame = () => {
  this.setState ({
      clickedCards: [],
      currentScore: 0,
      gameOver: false,
      status: "",
      albums
  });
  this.shuffleAlbums();
}



}




export default App;
