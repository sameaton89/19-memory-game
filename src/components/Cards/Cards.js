import React from "react";
import "./card.css";


// import "./FriendCard.css";

// const Cards = props => (
//   <div className="column">
//     <div className="img-container">
//       <img alt={props.name} src={props.image} />
//     </div>
//   </div>
// );
const Cards = props => (
  <div className="card">
  <div className="img-contain">
    <img alt={props.name} src={props.image} onClick={() => props.shuffleAlbums(props.id)} className="shuffle"/>
  </div>
</div>
);
export default Cards;
