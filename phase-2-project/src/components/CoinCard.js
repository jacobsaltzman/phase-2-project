import React from "react";

function CoinCard({coin}){

  const { id, name, ticker, price, type, language, image, wp, github } = coin;

  return(
    <div className="card" id={id}>
      <h3>{name}</h3>
      <iframe src={image} className="giphy-embed" allowFullScreen title={name}></iframe>
      <h4>{ticker} @ ${price}</h4> 
      <button id="plus-button">Add to Portfolio</button>
      <p>{name} is a {type} blockchain, originally coded in {language}</p>
      <br/>
      <a href={github}>GitHub</a>
      <a href={wp}>White Paper</a>
    </div>
  )
}

export default CoinCard;