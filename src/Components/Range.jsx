import React, { useState } from 'react';
import PrimesGenerator from './PrimesGenerator';
import './Range.css';

function Range() {
  const [primeNumbers, setPrimeNumbers] = useState([]);

  const handleGeneratePrimes = () => {
    const userNum = parseInt(document.querySelector('.input-range').value);
    const list = PrimesGenerator();
    const range = list.filter(num => num <= userNum);
    setPrimeNumbers(range);
  };

  return (
    <div>
      <h1 className='range-primes-page'>Prime numbers in a range, just enter the number you want.</h1> 
      <div className='box-range'>
        <input className='input-range' type="number" placeholder='Here!'/>
        <button type="button" onClick={handleGeneratePrimes}>Send</button> 
      </div>
      <div id='numbers-list'>
        {primeNumbers.map((num, index) => (
          <span className='numbers-span' key={index}>{num} </span>
        ))}
      </div>
    </div>
  );
}

export default Range;