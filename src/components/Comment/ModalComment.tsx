import { Modal } from "@components/Modal";
import { Dispatch } from "react";
import { getCommentsInPost } from "@services/Comments";
import { usePaginateResponse } from "@hooks/usePaginateResponse";
import { Comment } from "src/models/User";
import { CardComment } from "@components/Comment/CardComment";
import { FormComment } from "./FormComment";
import { CommentProvider } from "../../context/ContextComment";

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

  return (
    <CommentProvider>
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
            data.map((cmData) => (
              <CardComment
                key={cmData.id}
                {...cmData}
                nickname={cmData.user.nickname}
                avatar={cmData.user.avatar}
                showButton
                setData={setData}
              />
            ))}
          {error && <p>{error}</p>}
          {loading && <p>loading....</p>}
          {totalResponses > totalPages && (
            <button onClick={() => setPage(totalPages)}>Ver más</button>
          )}
          <FormComment setData={setData} data={data} postId={postId} />
        </div>
      </Modal>
    </CommentProvider>
  );
};
