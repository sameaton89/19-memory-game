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
    status: false,
    albums
  };


render() {
  return(
 <Wrapper>
    <Nav />
    <Header />

    {this.state.albums.map(album => (
          <Cards
            shuffleAlbums={this.shuffleAlbums}
            id={album.id}
            key={album.id}
            image={album.image}
          />

        ))}

  </Wrapper>
)}

shuffleAlbums = id => {
  // Filter this.state.friends for friends with an id not equal to the id being removed
  // const albums = this.state.albums.filter(album => album.id !== id);
  // Set this.state.friends equal to the new friends array
  this.setState({ albums: shuffle(this.state.albums) });
};

handleClicks = (id) => {
  const copyArray = [...this.state.clickedCards]
  copyArray.push(id); 
  
  this.setState({
      score: this.state.score + 1,
      clickedCards: copyArray
  })
  console.log("yeee");
  this.shuffleCards();
}
}



export default App;
