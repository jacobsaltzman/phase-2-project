import React from "react";

function CoinCard({coin}){

  const { id, name, ticker, price, type, language, image } = coin;

  return(
    <li className="card">
      <h3 id={id}>{name}</h3>
      <img src={image} alt={name}/>
      <h4>{ticker} @ ${price}</h4>
      <p>{name} is a {type} blockchain, originally coded in {language}</p>
    </li>
  )
}

export default CoinCard;