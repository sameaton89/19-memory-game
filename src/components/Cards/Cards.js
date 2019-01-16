import React from "react";
import "./card.css";


// import "./FriendCard.css";

const Cards = props => (
  <div className="column">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default Cards;
