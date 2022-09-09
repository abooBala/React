import './AirbnbExperience.css'
import star from './images/Star.png'
import ellipse from './images/ellipse.png'

export default function Card(props) {
    return(
        <section>
            <div className='Card'>
                <img src={props.img} alt="Life lessons with Katie Zaferes" className="Card--image"/>
                <div className='Card--stats'>
                    <img className='Card--star' src={star} alt="Card Rating" />
                    <span>{props.rating} &nbsp;</span>
                    <span className="gray">({props.ratingCount}) <img src={ellipse} />&nbsp;</span>
                    <span className="gray">{props.location}</span>
                </div>
                    <p className="Card--description m-0">{props.name}</p>
                    <p className="m-0"><b>From ${props.price}</b>/ person</p>
            </div>

        </section>
    )
}