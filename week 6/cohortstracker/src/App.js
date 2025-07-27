import React from 'react';
import './App.css';
import CohortDetails from './components/CohortDetails';

function App() {
  const cohorts = [
    { id: 'INTADMDF10', program: '.NET FSD', started: '22-Feb-2022', status: 'Scheduled', coach: 'Aathma', trainer: 'Jojo Jose' },
    { id: 'ADM21JF014', program: 'Java FSD', started: '10-Sep-2021', status: 'Ongoing', coach: 'Apoorv', trainer: 'Elisa Smith' },
    { id: 'CDBJF21025', program: 'Java FSD', started: '24-Dec-2021', status: 'Ongoing', coach: 'Aathma', trainer: 'John Doe' }
  ];

  return (
    <div className="App">
      <h1>Cohorts Details</h1>
      <div>
        {cohorts.map(cohort => <CohortDetails key={cohort.id} details={cohort} />)}
      </div>
    </div>
  );
}

export default App;