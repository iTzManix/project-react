import React from 'react';
import { Link } from 'react-router-dom';
import './Navegation.css'

function Navegation() {
    return (
        <div className='buttons-app'>
            <div><Link className='button' to="/" >Home</Link></div>
            <div><Link className='button' to="/generator" >Generator</Link></div>
            <div><Link className='button' to="/range" >Range</Link></div>
            <div><Link className='button' to="/decomposition" >Decomposition</Link></div>
        </div>
    );
}

export default Navegation;