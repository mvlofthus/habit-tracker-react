import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {

  const [currentTime, setCurrentTime] = useState(1);
  const [errorMessage, setErrorMessage] = useState('')
  

  useEffect(() => {
    axios.get('/time')
    .then((response) => {
      console.log(response);
      setCurrentTime(response.data.time);
    })
    .catch((error) => { 
      setErrorMessage(error.message);
    })
    }, []);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p> The current time is {currentTime}.</p>
        <p> {errorMessage} </p>
      </header>
    </div>
  );
}

export default App;
