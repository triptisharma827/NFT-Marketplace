import React from 'react';
import MintNFT from './components/MintNFT';
import OwnNFT from './components/OwnNFT';
import './css/app.css';


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>NFT Marketplace</h1>
        </header>
        <div className="App-list">
        <OwnNFT />
        </div>

        <MintNFT />
     
    </div>
  );
}

export default App;
