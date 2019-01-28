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
  <div>
      {props.images.map(item => (
            <div className="column" key={item.id}>
                <div className="img-container" key={item.id}>

        <img alt={item.name} src={item.image}  key={item.id}/>
        </div>
        </div>
      ))}
    </div>
);
export default Cards;
