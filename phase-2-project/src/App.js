
import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import Header from './components/Header';
import MainPage from './components/MainPage.js';
import NewCoinForm from "./components/NewCoinForm.js";
import Portfolio from './components/Portfolio';
import Market from './components/Market';
import {Switch, Route} from 'react-router-dom';

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
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/coins">
          <MainPage coins={coins}/>
        </Route>
        <Route path="/newcoin">
          <NewCoinForm onAddCoin={onAddCoin}/>
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/market">
          <Market />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
