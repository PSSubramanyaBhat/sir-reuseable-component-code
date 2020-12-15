import './App.css';

import React from 'react';
import logo from './logo.svg';
import Arrow from './components/Arrow/Arrow';
import { Direction } from './components/Arrow/Arrow';
import Dropdown from './components/Dropdown/Dropdown';

function App() {
  return (
    // <Arrow direction={Direction.Right} color="red"></Arrow>
    <Dropdown></Dropdown>
    );
}

export default App;
