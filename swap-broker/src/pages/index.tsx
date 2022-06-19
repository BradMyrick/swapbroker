import React from 'react';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
    <header className="App-header">
        <ul>
          <li><a href="default.asp">Home</a></li>
          <li><a href="news.asp">News</a></li>
          <li><a href="contact.asp">Contact</a></li>
          <li><a href="about.asp">About</a></li>
        </ul> 
    </header>


      <main>
        
        <h1 className="float">Welcome to SwapBroker.io</h1>
        <div>
        <p>
          Create one time use NFT swap contracts with the SwapBroker.io platform.
        </p>
        <button className='ShakeButton'>Trade NFT's</button>
        </div>
      </main>

    </div>

  );
}

export default App;
