import './Portfolio.css'
import email from './images/mail.png'
import github from './images/github_icon.png'
import facebook from './images/facebook_icon.png'
import instagram from './images/instagram_icon.png'
import linkedin from './images/linkedin_icon.png'
import twitter from './images/twitter_icon.png'
import portfolio from './images/portfolio_img.jpg'


export default function() {
    return(
        <section className='App--portfolio'>
            <div className='Portfolio--card'>
                <img src={portfolio} alt='abubakar bala portfolio image'/>
            <div className='Portfolio--info'>
                <h1>Abubakar Bala</h1>
                <h5>Frontend Developer</h5>
                <a href='https://www.kobokit.com' target='_blank'>kobokit.com</a>
                <div>
                    <a href="mailto:aboobala64@gmail.com" className='Portfolio--card--email'>
                        <img src={email} alt="email address" /> 
                        <p>Email</p>
                    </a>
                </div>
                <div className='Portfolio--about'>
                    <h3>About</h3>
                    <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>

                    <h3>Interests</h3>
                    <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                </div>
            </div>
            </div>
            <footer className='Portfolio--social'>
                <a href='https://twitter.com/aboooBala' target='_blank'><img src={twitter} alt="Twitter" /></a>
                <a href='https://web.facebook.com/aboo.bala'><img src={facebook} alt="Facebook" target='_blank'/></a>
                <a href='https://www.instagram.com/aboobala/'><img src={instagram} alt="Instagram" target='_blank'/></a>
                <a href='https://www.linkedin.com/in/aboo-bala/'><img src={linkedin} alt="Linkedin" target='_blank'/></a>
                <a href='https://github.com/abooBala'><img src={github} alt="" target='_blank'/></a>
            </footer>
        </section>
    )
}