import React from 'react';
import ReactDOM from 'react-dom/client';
import './AirbnbExperience.css';
import AirbnbExperienceNavbar from './AirbnbExperienceNavbar.js';
import Card from './Card.js'
import AirbnbExperienceHero from './AirbnbExperienceHero.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
  <>
    <AirbnbExperienceNavbar />
    <AirbnbExperienceHero />
    <Card />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
