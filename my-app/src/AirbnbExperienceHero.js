import './AirbnbExperience.css'
import hero from './images/hero-top.png'


export default function AirbnbExperienceHero() {
    return(
        <main>
            <section className='App--hero'>
                <img src={hero} alt="Airbnb Logo" className='Hero--img' />
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </section>
        </main>
    )
}