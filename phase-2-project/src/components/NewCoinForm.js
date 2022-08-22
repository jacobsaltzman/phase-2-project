import React, {useState} from "react";

function NewCoinForm({ onAddCoin }){

  const[formData, setFormData] = useState({
    name: "",
    ticker: "",
    type: "",
    price: "",
    language: "",
    image: "https://giphy.com/embed/d3mlGIM8WBQbQfVC"
  })

  function handleChange(e) {
    const {name, value} = e.target;
    setFormData((formData) => ({...formData, [name]: value}))
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3001/coins", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accepts': 'application/json'
    },
    body: JSON.stringify(formData)
  })
      .then((r) => r.json())
      .then((data) => {
        onAddCoin(data)
        setFormData({
          name: "",
          ticker: "",
          type: "",
          price: "",
          language: "",
          image: "https://giphy.com/embed/d3mlGIM8WBQbQfVC"
        });
      });

  };

  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Add New Coin</h3>

        <label>Name</label>
        <input type="text" id="name" name="name" onChange={handleChange} value={formData.name}/>

        <label>Ticker Symbol</label>
        <input type="text" id="ticker" name="ticker" onChange={handleChange} value={formData.ticker}/>

        <label>Consensus Mechanism</label>
        <select name="type" id="type" onChange={handleChange} value={formData.type}>
          <option>Select One</option>
          <option value="PoW">Proof of Work</option>
          <option value="PoS">Proof of Stake</option>
          <option value="Stablecoin">Stablecoin</option>
          <option value="RPCA">Other</option>
        </select>

        <label>Current Price</label>
        <input type="number" id="price" name="price" onChange={handleChange} value={formData.price}/>

        <label>Base Code Language</label>
        <select name="language" id="language" onChange={handleChange} value={formData.language}>
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