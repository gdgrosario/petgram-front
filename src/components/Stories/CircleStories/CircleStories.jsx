import avatar from '../simona.jpg'
export const CircleStories = ({addIstories = false}) => {
    return (
        <div className={[addIstories === true && 'circle-stories--add-istories',  'circle-stories'].join(' ')}>
            <img className='circle-stories__avatar' src={avatar} alt="avatar" />
        </div>
    )
}
