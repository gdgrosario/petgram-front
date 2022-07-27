import { Modal } from "@components/Modal";
import Link from "next/link";
import { ProfilePhoto } from "./ProfilePhoto";
import { FormEvent, useState, Dispatch } from "react";
import { createComment, getCommentsInPost } from "@services/Comments";
import { usePaginateResponse } from "@hooks/usePaginateResponse";
import { Comment } from "src/models/User";

interface IModalComment {
  postId: string;
  setToggleModal: Dispatch<boolean>;
}
export const ModalComment = ({ setToggleModal, postId }: IModalComment) => {
  const {
    loading,
    error,
    data,
    totalResponses,
    setPage,
    totalPages,
    page,
    setData,
  } = usePaginateResponse<Comment>({
    callBackRequest() {
      return getCommentsInPost(postId, {
        skip: page,
        limit: totalPages,
      });
    },
    totalP: 4,
  });

  const [errorComment, setErrorComment] = useState<string>("");
  const [loadingComment, setLoadingComment] = useState<boolean>(false);
  const [comment, setComment] = useState("");

  const handleComment = async (e: FormEvent) => {
    e.preventDefault();
    setErrorComment("");
    if (comment.trim() !== "") {
      setLoadingComment(true);
      const response = await createComment({
        postId,
        comment: comment,
      });
      if (response.error) {
        setErrorComment(response.error.message);
      } else {
        if (data) {
          setData([...data, response.data]);
        } else {
          setData([response.data]);
        }
      }
      setComment("");
      setLoadingComment(false);
    }
  };

  return (
    <Modal toggleModal={setToggleModal} title="Comentarios">
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
        {data &&
          !error &&
          data.map(({ id, user, comment }) => (
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
        {error && <p>{error}</p>}
        {errorComment && <p>{errorComment}</p>}
        {loading && <p>loading....</p>}
        {totalResponses > totalPages && (
          <button onClick={() => setPage(totalPages)}>Ver más</button>
        )}
        <form onSubmit={handleComment}>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Escribe un comentario"
          />
          <button>{loadingComment ? "Loading...." : "Comentar"}</button>
        </form>
      </div>
    </Modal>
  );
};
