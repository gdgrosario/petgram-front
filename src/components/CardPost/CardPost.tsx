import Image from "next/image";

import { ProfilePhoto } from "../ProfilePhoto";

import BarsMenu from "@public/assets/svgs/icons/bar.svg";
import Link from "next/link";
import { Comment as CommentType, UserBasic, Post } from "src/models/User";
import {
  forwardRef,
  LegacyRef,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { ModalComment } from "../Comment/ModalComment";
import { CardComment } from "../Comment/CardComment";
import { ControllerLikes } from "./ControllerLikes";
import { deletePost } from "@services/Posts";
import { useOwner } from "../../hooks/useOwner";
interface ICardPost {
  user: UserBasic;
  description: string;
  image: string;
  numberOflikes: number;
  postId: string;
  userLikes: UserBasic[];
  setPost: Dispatch<SetStateAction<Post[]>>;
  comments: CommentType[];
}
export const CardPost = forwardRef(
  (props: ICardPost, ref: LegacyRef<HTMLDivElement>) => {
    const {
      user,
      description,
      image,
      numberOflikes,
      postId,
      comments,
      userLikes,
      setPost,
    } = props;
    const [toggleModal, setToggleModal] = useState(false);
    const [btnDeletePost, setBtnDeletePost] = useState(false);
    const isOwner = useOwner(props.user.id);

    const handleDeletePost = async () => {
      const status = await deletePost(postId);
      if (status.data) {
        setPost((prev) => prev.filter((post) => post.id !== postId));
      }
    };

    return (
      <>
        <div ref={ref} className="card-post">
          <header className="card-post__header">
            <ProfilePhoto size="medium" profileAvatar={user.avatar} />
            <div className="card-post__user-info">
              <Link href={`/${user.nickname}`}>
                <a className="card-post__user-name">{user.nickname}</a>
              </Link>
              <b className="card-post__name">{user.name}</b>
            </div>
            {isOwner && (
              <div className="card-post__btn">
                <BarsMenu onClick={() => setBtnDeletePost(!btnDeletePost)} />
                {btnDeletePost && (
                  <button
                    onClick={() => handleDeletePost()}
                    className="card-post__btn-delete"
                  >
                    Eliminar
                  </button>
                )}
              </div>
            )}
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
                <span onClick={() => setToggleModal(!toggleModal)}>
                  Ver más comentarios
                </span>
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
