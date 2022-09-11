import './AirbnbExperience.css'
import star from './images/Star.png'
import ellipse from './images/ellipse.png'

export default function Card(props) {

    let badgeText
    if (props.openSpots == 0) {
        badgeText = "SOLD OUT"
    } 
    else if (props.location == "Online") {
        badgeText = "ONLINE"
    }

    return(
        <section>            
            <div className='Card'>
                {badgeText && <div className='Card--badge'>{badgeText}</div>}
                <img src={props.item.imgURL} alt="Life lessons with Katie Zaferes" className="Card--image"/>
                <div className='Card--stats'>
                    <img className='Card--star pr-2' src={star} alt="Card Rating" />
                    <span>{props.item.stats.rating} &nbsp;</span>
                    <span className="gray">({props.item.stats.reviewCount}) <img src={ellipse} />&nbsp;</span>
                    <span className="gray">{props.item.location}</span>
                </div>
                    <p className="Card--description m-0">{props.item.title}</p>
                    <p className="m-0"><b>From ${props.item.price}</b>/ person</p>
            </div>
        </section>
    )
}