import Image from 'next/image';
import Close from '@public/assets/svgs/icons/close.svg';

export const ModalCardPhoto = ({ photo }) => {
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <div className="icon">
          <Close className="close" />
        </div>

        <div className="image">
          <Image
            src={photo}
            alt="user"
            width="100%"
            height="100%"
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};
