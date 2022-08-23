
import React, { useState, useEffect } from 'react';
import Home from './components/Home';
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

  function onAddCoin(newCoin){
    setCoins([...coins, newCoin])
  }


  return (
    <div className="App">
      <Header />
      <Home />
      <MainPage coins={coins}/>
      <NewCoinForm onAddCoin={onAddCoin}/>
    </div>
  );
}

export default App;
