import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if(isRunning) {
      timer = setInterval(() => {
        setTimeRemaining(time => time - 1);
      }, 1000);
      return () => clearInterval(timer);
    };
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
    setTimeRemaining(25*60); //25 minutes in seconds
  };

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }

  function stopTimer() {
    setIsRunning(false);
  }

  function resetTimer() {
    setIsRunning(false);
    setTimeRemaining(25*60);
  }

  function resumeTimer() {
    setIsRunning(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h1>Pomodoro Timer</h1>
          <button onClick={startTimer}>Start</button>
          <button onClick={stopTimer}>Stop</button>
          <div>
            <h2>Time remaining : {formatTime(timeRemaining)}</h2>
          </div>
          <button onClick={resumeTimer}>Resume</button>
          <button onClick={resetTimer}>Reset</button>
      </header>
    </div>
  );
}

export default App;
