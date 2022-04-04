import React, { useState } from 'react';
import logo from './logo.svg';
import './styles/App.scss';
import Button from '@mui/material/Button';



function App() {

  const [value, setValue] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button
          variant="contained"
          onClick={() => (value) ? setValue(false) : setValue(true)}
        >
          Hello World
        </Button>
        <p className='value'>{`${value}`}</p>
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
