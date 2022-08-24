import React from "react";

function CoinCard({coin}){

  const { id, name, ticker, price, type, language, image } = coin;

  return(
    <ul className="card" id={id}>
      <h3>{name}</h3>
      <iframe src={image} className="giphy-embed" allowFullScreen title={name}></iframe>
      <h4>{ticker} @ ${price}</h4>
      <p>{name} is a {type} blockchain, originally coded in {language}</p>
      <br/>
      <button id="plus-button">Add to Portfolio</button>
      <button id="learn-button">Learn more</button>
    </ul>
  )
}

export default CoinCard;