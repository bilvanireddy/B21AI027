
import React, { useState } from 'react';

const App = () => {
  const [prime, setPrime] = useState('');
  const [even, setEven] = useState('');
  const [fibonacci, setFibonacci] = useState('');
  const [random, setRandom] = useState('');
  const [average, setAverage] = useState(null);

  const calculateAverage = () => {
    const primeNum = parseFloat(prime);
    const evenNum = parseFloat(even);
    const fibonacciNum = parseFloat(fibonacci);
    const randomNum = parseFloat(random);

    if (isNaN(primeNum) || isNaN(evenNum) || isNaN(fibonacciNum) || isNaN(randomNum)) {
      alert('Please enter valid numbers.');
      return;
    }

    const avg = (primeNum + evenNum + fibonacciNum + randomNum) / 4;
    setAverage(avg);
  };

  return (
    <div>
      <h1>Average Calculator</h1>
      <div>
        <label>
          Prime Number:
          <input
            type="text"
            value={prime}
            onChange={(e) => setPrime(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Even Number:
          <input
            type="text"
            value={even}
            onChange={(e) => setEven(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Fibonacci Number:
          <input
            type="text"
            value={fibonacci}
            onChange={(e) => setFibonacci(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Random Number:
          <input
            type="text"
            value={random}
            onChange={(e) => setRandom(e.target.value)}
          />
        </label>
      </div>
      <button onClick={calculateAverage}>Calculate Average</button>
      {average !== null && (
        <div>
          <h2>Average: {average.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
};

export default App;
