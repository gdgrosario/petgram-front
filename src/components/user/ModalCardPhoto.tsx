import Image from "next/image";
import Close from "@public/assets/svgs/icons/close.svg";
import { useContext } from "react";
import { UploadContext } from "@context/ContextUpload";

export const ModalCardPhoto = ({ photo }) => {
  const { setViewImage, viewImage } = useContext(UploadContext);

  const closePhoto = () => {
    setViewImage(false);
  };
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <div className="icon">
          <Close onClick={() => closePhoto()} className="close" />
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
