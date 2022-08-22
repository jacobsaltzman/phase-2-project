
import React from 'react';
import Header from './components/Header';
import MainPage from './components/MainPage.js';
import NewCoinForm from "./components/NewCoinForm.js";

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <NewCoinForm />
    </div>
  );
}

export default App;
