import React from "react";
import "./Card.scss";
import spades from "../../images/spade.png";
import diamonds from "../../images/diamond.png";
import clubs from "../../images/club.png";
import hearts from "../../images/heart.png";

const Card = (props, index) => {
  const { CardArr } = props;

  const Cards = CardArr.map((card) => {

    if (card.suit=== "spades"){
      return (
        <div key={index} className="card">
          <h1 class= "card--spades">{card.value}</h1>
          <img class= "card__suit" src={spades} alt="spades"/>
        </div>
      );
    }

    if (card.suit=== "diamonds"){
      return (
        <div key={index} className="card">
          <h1 class= "card--diamonds">{card.value}</h1>
          <img class= "card__suit diamonds" src={diamonds} alt="diamond"/>
        </div>
      );
    }

    if (card.suit=== "clubs"){
      return (
        <div key={index} className="card">
          <h1 class= "card--clubs">{card.value}</h1>
          <img class= "card__suit clubs" src={clubs} alt="club"/>
        </div>
      );
    }

    if (card.suit=== "hearts"){
      return (
        <div key={index} className="card">
          <h1 class= "card--hearts">{card.value}</h1>
          <img class= "card__suit" src={hearts} alt="heart"/>
        </div>
      );
    }

  return <div>{Card}</div>;
  });

  return <div className="Cards">{Cards}</div>;
};

export default Card;
