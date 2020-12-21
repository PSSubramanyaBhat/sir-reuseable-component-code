import './App.css';
import week from './week';
import React, { useState } from 'react';
import logo from './logo.svg';
import Arrow from './components/Arrow/Arrow';
import { Direction } from './components/Arrow/Arrow';
import Dropdown from './components/Dropdown/Dropdown';


function App() {
  const [day, setDay] = useState("Sunday");
  return (
    <Dropdown options={week} selectedoption={day} onItemSelected={(weekDay: string) => setDay(weekDay)} />

  );
}

export default App;
