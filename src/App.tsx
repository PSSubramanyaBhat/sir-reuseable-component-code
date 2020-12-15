import './App.css';

import React from 'react';
import logo from './logo.svg';
import Arrow from './components/Arrow/Arrow';
import { Direction } from './components/Arrow/Arrow';

function App() {
  return (
    <Arrow direction={Direction.Right} color="red"></Arrow>
  );
}

export default App;
