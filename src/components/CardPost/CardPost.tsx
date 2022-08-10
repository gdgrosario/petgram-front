import Image from "next/image";

import { ProfilePhoto } from "../ProfilePhoto";

import BarsMenu from "@public/assets/svgs/icons/bar.svg";
import Link from "next/link";
import { Comment as CommentType, UserBasic } from "src/models/User";
import { forwardRef, LegacyRef, useState } from "react";
import { ModalComment } from "../Comment/ModalComment";
import { CardComment } from "../Comment/CardComment";
import { ControllerLikes } from "./ControllerLikes";
interface ICardPost {
  user: UserBasic;
  description: string;
  image: string;
  numberOflikes: number;
  postId: string;
  userLikes: UserBasic[];
  comments: CommentType[];
}
export const CardPost = forwardRef(
  (props: ICardPost, ref: LegacyRef<HTMLDivElement>) => {
    const [toggleModal, setToggleModal] = useState(false);
    const {
      user,
      description,
      image,
      numberOflikes,
      postId,
      comments,
      userLikes,
    } = props;

    return (
      <>
        <div ref={ref} className="card-post">
          <header className="card-post__header">
            <ProfilePhoto size="medium" />
            <div className="card-post__user-info">
              <Link href={`/${user.nickname}`}>
                <a className="card-post__user-name">{user.nickname}</a>
              </Link>
              <b className="card-post__name">{user.name}</b>
            </div>
            <BarsMenu className="" />
          </header>

          {/* TODO: create carousel */}

          <div className="carousel-photo">
            <Image
              height={800}
              width={800}
              priority
              objectFit="contain"
              className="card-post__photo"
              src={image}
              alt="user-img"
            />
          </div>

          <p className="card-post__description">{description}</p>

          <footer className="footer-card-post">
            <ControllerLikes
              showMessageLike
              postId={postId}
              userLikes={userLikes}
              setToggleModal={setToggleModal}
              numberOfLikes={numberOflikes}
            />
            <section className="footer-card-post__section">
              {comments &&
                comments.map(({ user, comment, id }) => (
                  <CardComment
                    key={id}
                    avatar={user.avatar}
                    nickname={user.nickname}
                    comment={comment}
                  />
                ))}
              {comments && comments.length > 0 && (
                <button onClick={() => setToggleModal(!toggleModal)}>
                  Ver más
                </button>
              )}
            </section>
          </footer>
        </div>

        {toggleModal && (
          <ModalComment postId={postId} setToggleModal={setToggleModal} />
        )}
      </>
    );
  }
);
