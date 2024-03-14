import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import moment from 'moment';

function DateTime() {
  const [dateTime, setDateTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment().format('MMMM Do YYYY, h:mm:ss a');
      setDateTime(now);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Local Time and Date:</h2>
      <p>{dateTime}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DateTime />
      </header>
    </div>
  );
}

export default App;
