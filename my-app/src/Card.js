import './AirbnbExperience.css'
import CardOne from './images/card-img-1.png'
import star from './images/Star.png'
import ellipse from './images/ellipse.png'

export default function Card() {
    return(
        <main>
            <div className='Card'>
                <img src={CardOne} alt="Life lessons with Katie Zaferes" className="Card--image"/>
                <div className='Card--stats'>
                    <img className='Card--star' src={star} alt="Card Rating" />
                    <span>5.0 &nbsp;</span>
                    <span className="gray">(6) <img src={ellipse} />&nbsp;</span>
                    <span className="gray">USA</span>
                </div>
                    <p className="Card--description m-0">Life lessons with Katie Zaferes</p>
                    <p className="m-0"><b>From $136</b>/ person</p>
            </div>

        </main>
    )
}