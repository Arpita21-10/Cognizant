import React, { useState } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  const [counter, setCounter] = useState(0);

  // Increment logic
  const increment = () => setCounter(prev => prev + 1);
  const sayHello = () => alert('Hello! This is a static message.');

  const handleIncrement = () => {
    increment();
    sayHello();
  };

  // Decrement logic
  const decrement = () => setCounter(prev => prev - 1);

  // Say Welcome logic
  const sayWelcome = (msg) => alert(msg);

  // Synthetic event handler
  const handlePress = () => alert('I was clicked');

  return (
    <div style={{ padding: 30 }}>
      <h2>Counter: {counter}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={decrement} style={{ marginLeft: 10 }}>Decrement</button>
      <br /><br />
      <button onClick={() => sayWelcome('welcome')}>Say Welcome</button>
      <br /><br />
      <button onClick={handlePress}>OnPress</button>
      <br /><br />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
