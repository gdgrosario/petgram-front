import Simona from '@public/assets/user/simona.jpg'
import Image from 'next/image'
export const CardPhoto = () => {
  // { urlPhoto }
  return (
    <div className="card-photo">
      <Image src={Simona} className="card-photo__photo" />
    </div>
  )
}
