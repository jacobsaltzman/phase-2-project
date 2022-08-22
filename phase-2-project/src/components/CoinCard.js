import React from "react";

function CoinCard({coin}){

  const { id, name, ticker, price, type, language, image } = coin;

  return(
    <li className="card" id={id}>
      <h3>{name}</h3>
      <iframe src={image} className="giphy-embed" allowFullScreen title={name}></iframe>
      <h4>{ticker} @ ${price}</h4>
      <p>{name} is a {type} blockchain, originally coded in {language}</p>
    </li>
  )
}

export default CoinCard;