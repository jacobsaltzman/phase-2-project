import React from "react";
import CoinCard from "./CoinCard.js";

function CoinContainer({coins}){

  return(
    <ul className="container">
      {coins.map((coin) => {
        return (
          <CoinCard
          key={coin.id}
          coin={coin}
          />
        )
      })}
    </ul>
  )
}

export default CoinContainer;