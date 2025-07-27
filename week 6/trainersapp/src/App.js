import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; // 
import Home from './Home';
import TrainersList from './TrainersList';
import TrainerDetails from './TrainerDetails';
import './App.css';

function App() {
  return (
    <BrowserRouter> {/*  */}
      <div className="App">
        <h1>My Academy Trainers App</h1>
        <nav>
            {/* [cite: 211] */}
            <Link to="/">Home</Link> | <Link to="/trainers">Show Trainers</Link>
        </nav>
        <hr />
        <Routes> {/*  */}
          <Route path="/" element={<Home />} /> {/*  */}
          <Route path="/trainers" element={<TrainersList />} /> {/*  */}
          <Route path="/trainers/:id" element={<TrainerDetails />} /> {/*  */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;