import React from "react";

function NewCoinForm(){

  return (
    <section>
      <form className="form" autoComplete="off">
        <h3>Add New Coin</h3>

        <label>Name</label>
        <input type="text" id="name" name="name"/>

        <label>Ticker Symbol</label>
        <input type="text" id="ticker" name="ticker"/>

        <label>Consensus Mechanism</label>
        <select name="type" id="type">
          <option>Select One</option>
          <option value="PoW">Proof of Work</option>
          <option value="PoS">Proof of Stake</option>
          <option value="Stablecoin">Stablecoin</option>
          <option value="RPCA">Other</option>
        </select>

        <label>Current Price</label>
        <input type="number" id="price" name="price"/>

        <label>Language of Base Code</label>
        <select name="type" id="type">
          <option>Select One</option>
          <option value="python">Python</option>
          <option value="C++">C++</option>
          <option value="Rust">Rust</option>
          <option value="Haskell">Haskell</option>
          <option value="n/a">Other</option>
        </select>

        <button type="submit">Add Coin</button>
      </form>
    </section>
  )

}

export default NewCoinForm;