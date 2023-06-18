import React from 'react';
import logo from './logo.svg';
import './App.css';
import NetworkGraph from './components/NetworkGraph';
import TimelineExpl from './components/TimelineExpl';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hallo hallo
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
     
        <NetworkGraph />
        <TimelineExpl/>
     
      </header>
      

    </div>
  );
}

export default App;
