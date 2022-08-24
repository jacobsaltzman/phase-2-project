import React from "react";
import { Link } from "react-router-dom";

const Header = ({handleDarkMode, isDarkMode}) => {

  
  return(
    <header className="App-header">
      <div id="dark-button">
          <button onClick={handleDarkMode}>{isDarkMode? 'Darkmode 🌙': 'Lightmode ☀️'} </button>
      </div>
        <div className="navbar-header">
          <h1 id="logo">
            Coin+folio
          </h1>
          <div className="navbar">
            
            <Link to="/">Home</Link>
            <Link to="/coins">Top Coins</Link>
            <Link to="/newcoin">Add A Coin</Link>
            <Link to="/portfolio">My Portfolio</Link>
            <Link to="/market">Market Data</Link>
            
          </div>
        </div>
    </header>
  )
}

export default Header;

