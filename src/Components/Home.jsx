import React from 'react';
import Navegation from './Navegation';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Generator from './Generator';
import Decomposition from './Decomposition';
import Range from './Range';
import './Home.css';

function Home() {
    return (
        <div>
            <h1 className='title-app'><span>Prime Numbers</span> <span className='color-calc'>Calculator</span> <span className='alpha'>Alpha version</span></h1>
            <h2>In this page you will find things about prime numbers, just click the button you want.</h2>
            <Router>
                <Navegation/>
                <Routes>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/generator" element={<Generator/>}/>
                    <Route path="/decomposition" element={<Decomposition/>}/>
                    <Route path="/range" element={<Range/>}/>
                </Routes>
            </Router>
            
        </div>
    );
}

export default Home;