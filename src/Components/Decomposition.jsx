import React from 'react';
import PrimesGenerator from './PrimesGenerator';
import './Decomposition.css'

const list = PrimesGenerator();

function decomposeInPrimes(number) {
    let division = number / 2;
    let array = [];
    for (let i = 1; i <= division; i++) {
        if (number % i === 0 && list.includes(i)) {
            array.push(i);
        }
    }
    return array;
}

function Decomposition() {
    const handleDecompose = () => {
        const inputNumber = parseInt(document.querySelector('input').value);
        const result = decomposeInPrimes(inputNumber);
        document.getElementById('numbers-list-decompose').textContent = result.join(', ');
    };

    return (
        <div>
            <h1 className='decomposition-tittle'>Decompose primes numbers</h1>
            <div>
                <input className='button-primes-decompose-input' type="number" placeholder='Here!' />
                <button type="button" className='button-primes-decompose' onClick={handleDecompose}>
                    Send
                </button>
            </div>
            <div id='numbers-list-decompose'></div>
        </div>
    );
}

export default Decomposition;