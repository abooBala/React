import './AirbnbExperience.css'
import CardOne from './images/card-img-1.png'
import star from './images/Star.png'
import ellipse from './images/ellipse.png'

export default function Card() {
    return(
        <main>
            <div className='Card'>
                <img src={CardOne} alt="Life lessons with Katie Zaferes" />
                <div className='Card--info'>
                    <p>
                        <img className='Rating' src={star} alt="Card Rating" />
                        <span>
                            5.0
                            (6)
                            <img src={ellipse} alt="Separator" />
                            USA
                        </span>
                    </p>
                    <h5>Life lessons with Katie Zaferes</h5>
                    <p>From $136
                        <span>/ person</span>
                    </p>
                </div>

            </div>

        </main>
    )
}