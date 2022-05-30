import avatar from '@public/assets/user/simona.jpg'
import Image from 'next/image'

export const CircleStories = ({ addIstories = false }) => {
  return (
    <div
      className={`${addIstories === true && 'circle-stories--add-istories'}`}
    >
      <Image
        className="circle-stories__avatar"
        src={avatar}
        alt="avatar"
        width={45}
        height={45}
      />
    </div>
  )
}
