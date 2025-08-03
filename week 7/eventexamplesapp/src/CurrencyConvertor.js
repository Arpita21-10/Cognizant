import React, { useState } from 'react';

function CurrencyConvertor() {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Example conversion rate: 1 Euro = 90 Rupees
    const rate = 90;
    if (!isNaN(rupees) && rupees !== '') {
      setEuro((parseFloat(rupees) / rate).toFixed(2));
    } else {
      setEuro(null);
    }
  };

  return (
    <div>
      <h3>Currency Convertor (INR to Euro)</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={rupees}
          onChange={e => setRupees(e.target.value)}
          placeholder="Enter amount in INR"
        />
        <button type="submit">Convert</button>
      </form>
      {euro !== null && (
        <div>
          <p>{rupees} INR = {euro} Euro</p>
        </div>
      )}
    </div>
  );
}

export default CurrencyConvertor;
