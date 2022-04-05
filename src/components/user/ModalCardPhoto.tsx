import Image from 'next/image';

export const ModalCardPhoto = ({ photo }) => {
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <Image
          src={photo}
          alt="user"
          width="100%"
          height="100%"
          layout="responsive"
        />
      </div>
    </div>
  );
};
