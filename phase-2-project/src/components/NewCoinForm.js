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
          <option>Proof of Work</option>
          <option>Proof of Stake</option>
          <option>Stablecoin</option>
          <option>Other</option>
        </select>

        <label>Current Price</label>
        <input type="number" id="price" name="price"/>

        <label>Language of Base Code</label>
        <input type="text" id="language" name="language"/>

        <button type="submit">Add Coin</button>
      </form>
    </section>
  )

}

export default NewCoinForm;