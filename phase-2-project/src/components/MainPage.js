import React, { useEffect, useState } from "react";

function MainPage(){
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/coins")
      .then((r) => r.json())
      .then(setCoins)
      console.log(coins)
      
  }, [])


  return(
    <div>
      <h1>Top Coins</h1>
    </div>
  )

}

export default MainPage;