import React, { useEffect, useState } from 'react';
import PrimesGenerator from './PrimesGenerator';
import './Generator.css'

function Generator() {
  const [randomPrime, setRandomPrime] = useState(null);

  useEffect(() => {
    const numbersList = PrimesGenerator();
    const randomIndex = Math.floor(Math.random() * numbersList.length);
    const randomPrimeNumber = numbersList[randomIndex];
    setRandomPrime(randomPrimeNumber);
  }, []);

  return (
    <div>
      <h1 className='generator-description-head'>Generator</h1>
      <h2 className='generator-description'>This is the Generator, you can get any random number between 100000</h2>
      <div id='prime-number'>
        <h3>This is your prime number:</h3>
        <p className='prime-number-print'>{randomPrime}</p>
      </div>
    </div>
  );
}

export default Generator;