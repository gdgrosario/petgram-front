import Simona from "@public/assets/user/simona.jpg";
import Image, { StaticImageData } from "next/image";
import { ModalCardPhoto } from "./ModalCardPhoto";
import { NextPage } from "next";
import { Post } from "src/models/User";

interface Props {
  post: Post;
}

export const CardPhoto = ({ post }: Props) => {
  const handlePhoto = (url: StaticImageData) => {
    console.log(url);
  };
  return (
    <>
      <div className="card-photo">
        <Image
          onClick={() => handlePhoto(Simona)}
          src={post.image}
          className="card-photo__photo"
          width={300}
          height={300}
        />
      </div>

      {/* <ModalCardPhoto photo={post.image} /> */}
    </>
  );
};
