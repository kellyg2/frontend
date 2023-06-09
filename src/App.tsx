import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const openMenu =() => {
    document.querySelector("sidebar")?.classList.add("open");
  }
  const closeMenu =() => {
    document.querySelector("sidebar")?.classList.remove("close");
  }
  return (
    <div className= ".grid-container">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
