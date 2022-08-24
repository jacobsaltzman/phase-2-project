import React from "react";
import CoinContainer from "./CoinContainer.js";

function MainPage({ coins }){
  
  return(
    <div>
      <h1 id="top-coins">Top Coins</h1>
      <CoinContainer coins={coins}/>
    </div>
  )

}

export default MainPage;