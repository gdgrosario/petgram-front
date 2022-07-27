import Image, { StaticImageData } from "next/image";
import { ModalCardPhoto } from "./ModalCardPhoto";
import { Post } from "src/models/User";
import { UploadContext } from "@context/ContextUpload";
import { useContext } from "react";

interface Props {
  post: Post;
}

export const CardPhoto = ({ post }: Props) => {
  const { setViewImage, viewImage } = useContext(UploadContext);

  const handlePhoto = () => {
    setViewImage(true);
  };
  return (
    <>
      <div className="card-photo">
        <Image
          onClick={() => handlePhoto()}
          src={post.image}
          className="card-photo__photo"
          width={300}
          height={300}
        />
      </div>

      {viewImage && <ModalCardPhoto photo={post.image} />}
    </>
  );
};
