import './App.css';

import React, { useState } from 'react';
import logo from './logo.svg';
import Arrow from './components/Arrow/Arrow';
import { Direction } from './components/Arrow/Arrow';
import Dropdown from './components/Dropdown/Dropdown';


const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function App() {
  const [day, setDay] = useState("Sunday");
  return (
    // <Arrow direction={Direction.Right} color="red"></Arrow>
    // <Dropdown ></Dropdown>
    <Dropdown options={week} selectedoption={day} onItemSelected={(weekDay: string) => setDay(weekDay)} />

  );
}

export default App;
