import React, { useState } from 'react';

// Functional component to display a list of all players and their scores.
function ListOfPlayers({ players }) {
  return (
    <div>
      <h2>List of Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            Mr. {player.name} <span>{player.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Functional component to display players with scores less than or equal to 70.
function ScoreBelow70({ players }) {
  const playersBelow70 = players.filter(player => player.score <= 70);
  return (
    <div>
      <h2>List of Players having Scores Less than 70</h2>
      <ul>
        {playersBelow70.map((player, index) => (
          <li key={index}>
            Mr. {player.name} <span>{player.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Functional component to display odd-indexed players from a list.
function OddPlayers({ players }) {
    const oddPlayers = players.filter((_, index) => index % 2 === 0);
    return (
        <div>
            <h2>Odd Players</h2>
            <ul>
                {oddPlayers.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>
        </div>
    );
}

// Functional component to display even-indexed players from a list.
function EvenPlayers({ players }) {
    const evenPlayers = players.filter((_, index) => index % 2 !== 0);
    return (
        <div>
            <h2>Even Players</h2>
            <ul>
                {evenPlayers.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>
        </div>
    );
}

// Functional component to display a merged list of Indian players.
function ListOfIndianPlayers({ IndianPlayers }) {
  return (
    <div>
      <h2>List of Indian Players Merged:</h2>
      <ul>
        {IndianPlayers.map((player, index) => (
          <li key={index}>Mr. {player}</li>
        ))}
      </ul>
    </div>
  );
}

// Main App component that renders everything.
function App() {
  const [flag, setFlag] = useState(true);

  const players = [
    { name: 'Jack', score: 50 },
    { name: 'Michael', score: 70 },
    { name: 'John', score: 40 },
    { name: 'Ann', score: 61 },
    { name: 'Elisabeth', score: 61 },
    { name: 'Sachin', score: 95 },
    { name: 'Dhoni', score: 100 },
    { name: 'Virat', score: 84 },
    { name: 'Jadeja', score: 64 },
    { name: 'Raina', score: 75 },
    { name: 'Rohit', score: 80 },
  ];

  const T20Players = ['First Player', 'Second Player', 'Third Player'];
  const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];
  const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];

  const IndianTeam = ["Sachin1", "Dhoni2", "Virat3", "Rohit4", "Yuvraj5", "Raina6"];

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => setFlag(!flag)} style={{ marginBottom: '20px' }}>
        Toggle View
      </button>
      {flag ? (
        <div>
          <h1>List of Players</h1>
          <ListOfPlayers players={players} />
          <hr />
          <ScoreBelow70 players={players} />
        </div>
      ) : (
        <div>
          <h1>Indian Team</h1>
          <hr />
          <OddPlayers players={IndianTeam} />
          <hr />
          <EvenPlayers players={IndianTeam} />
          <hr />
          <ListOfIndianPlayers IndianPlayers={IndianPlayers} />
        </div>
      )}
    </div>
  );
}

export default App;
