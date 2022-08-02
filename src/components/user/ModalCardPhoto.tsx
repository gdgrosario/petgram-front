import Image from "next/image";
import Close from "@public/assets/svgs/icons/close.svg";
import { useContext, useState } from "react";
import { UploadContext } from "@context/ContextUpload";
import { ModalComment } from "@components/Comment/ModalComment";
import Comment from "@public/assets/svgs/icons/chat.svg";

export const ModalCardPhoto = ({ photo, post }) => {
  const { setViewImage, viewImage } = useContext(UploadContext);

  const [toggleModal, setToggleModal] = useState<boolean>(false);

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

          <Comment onClick={() => setToggleModal(true)}></Comment>
        </div>

        {toggleModal && (
          <ModalComment postId={post.id} setToggleModal={setToggleModal} />
        )}
      </div>
    </div>
  );
};
