import React, { useState } from 'react';
import {
  generateMegaMillionsNumbers,
  generatePowerballNumbers,
  generateFantasy5Numbers,
} from './utils/generateNumbers';

function App() {
  const [selectedGame, setSelectedGame] = useState('Mega Millions');
  const [numbers, setNumbers] = useState([]);
  const [specialNumber, setSpecialNumber] = useState(null);

  const generateNumbers = () => {
    let result;
    switch (selectedGame) {
      case 'Mega Millions':
        result = generateMegaMillionsNumbers();
        setNumbers(result.numbers);
        setSpecialNumber(result.megaBall);
        break;
      case 'Powerball':
        result = generatePowerballNumbers();
        setNumbers(result.numbers);
        setSpecialNumber(result.powerBall);
        break;
      case 'Fantasy 5':
        result = generateFantasy5Numbers();
        setNumbers(result.numbers);
        setSpecialNumber(null);
        break;
      // Add more cases for other games as needed
      default:
        break;
    }
  };

  return (
    <div className="app">
      <h1>Florida Lottery Number Generator</h1>
      <select value={selectedGame} onChange={(e) => setSelectedGame(e.target.value)}>
        <option value="Mega Millions">Mega Millions</option>
        <option value="Powerball">Powerball</option>
        <option value="Fantasy 5">Fantasy 5</option>
        {/* Add more options for other games as needed */}
      </select>
      <button onClick={generateNumbers}>Generate Numbers</button>
      {numbers.length > 0 && (
        <div>
          <h2>Numbers: {numbers.join(', ')}</h2>
          {specialNumber && <h2>Special Number: {specialNumber}</h2>}
        </div>
      )}
    </div>
  );
}

export default App;
