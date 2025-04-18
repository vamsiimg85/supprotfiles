import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [selectedFruit, setSelectedFruit] = useState('');

  const handleChange = (event) => {
    setSelectedFruit(event.target.value);
  };

  return (
    <div>
      <h2>Select your favorite fruit:</h2>
      
      <label>
        <input
          type="radio"
          value="Apple"
          checked={selectedFruit === 'Apple'}
          onChange={handleChange}
        />
        Apple
      </label><br />

      <label>
        <input
          type="radio"
          value="Banana"
          checked={selectedFruit === 'Banana'}
          onChange={handleChange}
        />
        Banana
      </label><br />

      <label>
        <input
          type="radio"
          value="Orange"
          checked={selectedFruit === 'Orange'}
          onChange={handleChange}
        />
        Orange
      </label>

      <p>You selected: <strong>{selectedFruit || 'Nothing yet!'}</strong></p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
