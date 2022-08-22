import React, { useEffect, useState } from "react";
import CoinContainer from "./CoinContainer.js";

function MainPage(){

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/coins")
      .then((r) => r.json())
      .then((data)=> setCoins(data))
  }, [])

  console.log(coins)
  
  return(
    <div>
      <h1>Top Coins</h1>
      <CoinContainer coins={coins}/>
    </div>
  )

}

export default MainPage;