import React from 'react';
import ReactDOM from 'react-dom/client';
import './AirbnbExperience.css';
import AirbnbExperienceNavbar from './AirbnbExperienceNavbar.js';
import AirbnbExperienceHero from './AirbnbExperienceHero.js'
import data from './data.js'
import Card from './Card.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
const cards = data.map(item => {
  return (
    <Card 
      key={item.id}
      item={item}
    />
  )
})

root.render( 
  <>
    <AirbnbExperienceNavbar />
    <main>
      <AirbnbExperienceHero />
      <div className='Cards'>
        {cards}                
      </div>
    </main>
  </> 
);

