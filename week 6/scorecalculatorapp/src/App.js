import React from 'react';
import './App.css';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore Name={"Steephan"} School={"SCH"} Total={455} goal={"Become a Full-stack developer"} />
    </div>
  );
}

export default App;