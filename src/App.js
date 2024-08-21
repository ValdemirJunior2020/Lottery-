import './App.css'; // Correct path

import React, { useState } from 'react';
import {
  generateFloridaMegaMillionsNumbers,
  generateFloridaPowerballNumbers,
  generateFantasy5Numbers,
  generateMissouriMegaMillionsNumbers,
  generateMissouriPowerballNumbers,
  generateLottoNumbers,
  generateShowMeCashNumbers,
  generatePick4Numbers,
  generatePick3Numbers,
} from './utils/generateNumbers';

function App() {
  const [selectedState, setSelectedState] = useState('Florida');
  const [selectedGame, setSelectedGame] = useState('');
  const [numbers, setNumbers] = useState([]);
  const [specialNumber, setSpecialNumber] = useState(null);

  const generateNumbers = () => {
    let result;
    if (selectedState === 'Florida') {
      switch (selectedGame) {
        case 'Mega Millions':
          result = generateFloridaMegaMillionsNumbers();
          setNumbers(result.numbers);
          setSpecialNumber(result.megaBall);
          break;
        case 'Powerball':
          result = generateFloridaPowerballNumbers();
          setNumbers(result.numbers);
          setSpecialNumber(result.powerBall);
          break;
        case 'Fantasy 5':
          result = generateFantasy5Numbers();
          setNumbers(result.numbers);
          setSpecialNumber(null);
          break;
        // Add more Florida cases as needed
        default:
          break;
      }
    } else if (selectedState === 'Missouri') {
      switch (selectedGame) {
        case 'Mega Millions':
          result = generateMissouriMegaMillionsNumbers();
          setNumbers(result.numbers);
          setSpecialNumber(result.megaBall);
          break;
        case 'Powerball':
          result = generateMissouriPowerballNumbers();
          setNumbers(result.numbers);
          setSpecialNumber(result.powerBall);
          break;
        case 'Lotto':
          result = generateLottoNumbers();
          setNumbers(result.numbers);
          setSpecialNumber(null);
          break;
        case 'Show Me Cash':
          result = generateShowMeCashNumbers();
          setNumbers(result.numbers);
          setSpecialNumber(null);
          break;
        case 'Pick 4':
          result = generatePick4Numbers();
          setNumbers(result.numbers);
          setSpecialNumber(null);
          break;
        case 'Pick 3':
          result = generatePick3Numbers();
          setNumbers(result.numbers);
          setSpecialNumber(null);
          break;
        // Add more Missouri cases as needed
        default:
          break;
      }
    }
  };

  return (
    <div
      className="app"
      style={{
        backgroundImage: "url('/loto.png'), radial-gradient(circle, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <h1>Lottery Number Generator</h1>
      <div>
        <label htmlFor="state">Select State: </label>
        <select id="state" value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
          <option value="Florida">Florida</option>
          <option value="Missouri">Missouri</option>
        </select>
      </div>
      <div>
        <label htmlFor="game">Select Game: </label>
        <select
          id="game"
          value={selectedGame}
          onChange={(e) => setSelectedGame(e.target.value)}
        >
          {selectedState === 'Florida' && (
            <>
              <option value="Mega Millions">Mega Millions</option>
              <option value="Powerball">Powerball</option>
              <option value="Fantasy 5">Fantasy 5</option>
              {/* Add more Florida games as needed */}
            </>
          )}
          {selectedState === 'Missouri' && (
            <>
              <option value="Mega Millions">Mega Millions</option>
              <option value="Powerball">Powerball</option>
              <option value="Lotto">Lotto</option>
              <option value="Show Me Cash">Show Me Cash</option>
              <option value="Pick 4">Pick 4</option>
              <option value="Pick 3">Pick 3</option>
              {/* Add more Missouri games as needed */}
            </>
          )}
        </select>
      </div>
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
