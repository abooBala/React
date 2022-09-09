import React from 'react';
import ReactDOM from 'react-dom/client';
import './AirbnbExperience.css';
import AirbnbExperienceNavbar from './AirbnbExperienceNavbar.js';
import Card from './Card.js'
import AirbnbExperienceHero from './AirbnbExperienceHero.js'
import ImgOne from './images/card-img-1.png'
import ImgTwo from './images/card-img-2.png'
import ImgThree from './images/card-img-3.png'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <>
    <AirbnbExperienceNavbar />
    <main>
      <AirbnbExperienceHero />
      <div className='Cards'>
        <Card
          img={ImgOne}
          rating="5"
          ratingCount="5"
          location="USA"
          name="Life lessons with Katie Zaferes"
          price=" 136"        
        />
        <Card 
          img={ImgTwo}
          rating="5"
          ratingCount="30"
          location="USA"
          name="Learn wedding photography"
          price=" 125"   
        />
        <Card
          img={ImgThree} 
           rating="4.8"
           ratingCount="2"
           location="USA"
           name="Group Mountain Biking"
           price=" 50"         
        />
      </div>
    </main>
  </> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
