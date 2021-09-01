import './CardInfoProfile.scss'

export function CardInfoProfile  ( { number = 0 , textCard = 'Info Card' } ) {
    return (
        <a href="/" className="cardProfile">
            <span className="cardProfile__number">
                {number}
            </span>
            <p className="cardProfile__textCard">
                {textCard}
            </p>
        </a>
    )
}
