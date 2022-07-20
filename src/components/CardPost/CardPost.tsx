import Image from "next/image";

import { ProfilePhoto } from "./ProfilePhoto";

import BarsMenu from "@public/assets/svgs/icons/bar.svg";
import Comment from "@public/assets/svgs/icons/chat.svg";
import Send from "@public/assets/svgs/icons/send.svg";
import Favorite from "@public/assets/svgs/icons/favorite.svg";
import Link from "next/link";
import { Comment as CommentType, UserBasic } from "src/models/User";
import { useState, useEffect } from "react";
import { Modal } from "@components/Modal";
import { getCommentsInPost } from "@services/Comments";

interface ICardPost {
  user: UserBasic;
  description: string;
  image: string;
  likes: number;
  postId: string;
  comments: CommentType[];
}
export const CardPost = ({
  user,
  description,
  image,
  comments,
  likes,
  postId,
}: ICardPost) => {
  const [toggleModal, setToggleModal] = useState(false);
  return (
    <>
      <div className="card-post">
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
          <section className="footer-card-post__section">
            <ul className="footer-card-post__list-footer-btns">
              <li className="footer-card-post__items-footer-btns">
                <button>
                  <Favorite /> <b>{likes}</b>
                </button>
              </li>
              <li className="footer-card-post__items-footer-btns">
                <button>
                  <Comment />
                </button>
              </li>
              <li className="footer-card-post__items-footer-btns">
                <button>
                  <Send />
                </button>
              </li>
            </ul>
          </section>
          <section className="footer-card-post__section">
            {likes && likes > 0 ? (
              <h4 className="footer-card-post__follower-like">
                Le gusta a Snoopy y 30 más
              </h4>
            ) : null}

            {comments &&
              comments.map(({ user, comment, id }) => (
                <div key={id} className="footer-card-post__comment">
                  <Link href={`/${user.nickname}`}>
                    <a>
                      <ProfilePhoto size="small" profileAvatar={user.avatar} />
                      <b>{user.nickname}</b>
                    </a>
                  </Link>{" "}
                  {comment}
                </div>
              ))}
            {comments && (
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
};

const ModalComment = ({ setToggleModal, postId }: any) => {
  const [comments, setComments] = useState<CommentType[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(4);

  useEffect(() => {
    getCommentsInPost(postId, {
      skip: page,
      limit: totalPages,
    }).then((response) => {
      if (response.error) {
        setError(response.error.message);
      } else {
        if (comments) {
          setTotalPages(totalPages * 2);
          setComments([...comments, ...response.data]);
        } else {
          setComments(response.data);
        }
      }
    });

    setLoading(false);
  }, [page]);

  return (
    <Modal toggleModal={setToggleModal} title="Comentarios">
      {loading && <p>loading....</p>}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          overflowY: "auto",
          height: "90vh",
          padding: "20px 20px 40px 20px",
        }}
      >
        {error && <p>{error}</p>}
        {comments &&
          comments.map(({ id, user, comment }) => (
            <div key={id} className="footer-card-post__comment">
              <Link href={`/${user.nickname}`}>
                <a>
                  <ProfilePhoto size="small" profileAvatar={user.avatar} />
                  <b>{user.nickname}</b>
                </a>
              </Link>{" "}
              {comment}
            </div>
          ))}
        <button onClick={() => setPage(totalPages)}>Ver más</button>
        <input placeholder="Escribe un comentario..." type="text" />
      </div>
    </Modal>
  );
};
