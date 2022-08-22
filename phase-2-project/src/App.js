
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MainPage from './components/MainPage.js';
import NewCoinForm from "./components/NewCoinForm.js";

function App() {

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/coins")
      .then((r) => r.json())
      .then((data)=> setCoins(data))
  }, [])

  console.log(coins)


  return (
    <div className="App">
      <Header />
      <MainPage coins={coins}/>
      <NewCoinForm />
    </div>
  );
}

export default App;
