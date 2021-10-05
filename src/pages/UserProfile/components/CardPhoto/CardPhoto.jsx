import simona from '../../img/simona.jpg'
export const CardPhoto = ({ urlPhoto }) => {
    return (
        <div className="card-photo">
            <img className="card-photo__photo" src={simona} alt="avatar" />
        </div>
    )
}
