import React from "react";
import Darkmode from "./Darkmode";
import { Link } from "react-router-dom";

const Header = () => {
  return(
    <header className="App-header">
      <Darkmode />
        <div className="navbar-header">
          <h1>
            Coin+folio
          </h1>
          <div className="navbar">
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/coins">Top Coins</Link></li>
            <li><Link to="/newcoin">Add A Coin</Link></li>
            <li><Link to="/portfolio">My Portfolio</Link></li>
            <li><Link to="/market">Market Data</Link></li>
            </ul>
          </div>
        </div>
    </header>
  )
}

export default Header;

