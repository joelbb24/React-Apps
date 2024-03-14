import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect} from 'react';

function App() {
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isFasting, setIsFasting] = useState(false);

  useEffect(() => {
    let timer;
    if (isFasting) {
      timer = setInterval(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
}, [isFasting]);

  const startFast = () => {
    setIsFasting(true);
    setTimeRemaining(23*60*60); //23 hours in seconds
  };

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return [hours, minutes, remainingSeconds]
    .map((v) => (v < 10 ? "0" + v : v))
    .filter((v, i) => v !== "00" || i > 0)
    .join(":");
}

return (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <button onClick={startFast}>Start Fast</button>
      {isFasting && (
        <div>
          <h2>Time Remaining: {formatTime(timeRemaining)}</h2>
        </div>
      )}
    </header>
  </div>
  );
}

export default App;
