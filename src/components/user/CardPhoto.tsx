import Simona from '@public/assets/user/simona.jpg';
import Image, { StaticImageData } from 'next/image';
import { ModalCardPhoto } from './ModalCardPhoto';
export const CardPhoto = () => {
  const handlePhoto = (url: StaticImageData) => {
    console.log(url);
  };
  return (
    <>
      <div className="card-photo">
        <Image
          onClick={() => handlePhoto(Simona)}
          src={Simona}
          className="card-photo__photo"
        />
      </div>

      <ModalCardPhoto photo={Simona} />
    </>
  );
};
