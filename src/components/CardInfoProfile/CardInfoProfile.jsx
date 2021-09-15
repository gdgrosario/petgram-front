import { Link } from 'react-router-dom'
export function CardInfoProfile  ( { number = 0 , textCard = 'Info Card' } ) {
    return (
        <Link to="/" className="cardProfile">
            <span className="cardProfile__number">
                {number}
            </span>
            <p className="cardProfile__textCard">
                {textCard}
            </p>
        </Link>
    )
}
