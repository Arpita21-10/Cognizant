import React from 'react';

function OfficeSpaceItem({ space }) {
  const rentStyle = {
    color: space.Rent <= 60000 ? 'red' : 'green',
    fontWeight: 'bold',
  };

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', marginBottom: '16px' }}>
      <h2>Name: {space.Name}</h2>
      <h3 style={rentStyle}>Rent: Rs. {space.Rent}</h3>
      <h3>Address: {space.Address}</h3>
    </div>
  );
}

function App() {
  const element = "Office Space";
  const imageUrl = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070&auto=format&fit=crop";

  const officeSpaces = [
    { Name: "DBS", Rent: 50000, Address: "Chennai" },
    { Name: "Regus", Rent: 75000, Address: "Mumbai" },
    { Name: "WeWork", Rent: 80000, Address: "Bangalore" },
    { Name: "Cowrks", Rent: 55000, Address: "Delhi" },
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>{element}, at Affordable Range</h1>
      <img 
        src={imageUrl} 
        width="25%" 
        height="auto" 
        alt="Modern Office Space" 
        style={{ borderRadius: '8px', marginBottom: '20px' }} 
      />
      
      {officeSpaces.map((space, index) => (
        <OfficeSpaceItem key={index} space={space} />
      ))}
    </div>
  );
}

export default App;
