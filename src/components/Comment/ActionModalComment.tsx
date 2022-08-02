import { ActionsModal } from "../ActionsModal";
import { Dispatch, SetStateAction, useContext } from "react";
import { deleteComment } from "@services/Comments";
import { Comment } from "src/models/User";
import { CommentContext } from "@context/ContextComment";

interface IActionModalComment {
  id: string;
  setData: Dispatch<SetStateAction<Comment[]>>;
  setToggleModal: Dispatch<boolean>;
}
export const ActionModalComment = ({
  id,
  setToggleModal,
  setData,
}: IActionModalComment) => {
  const {
    setCurrentIdComment,
    setInputComment,
    setErrorActionComment,
    currentIdComment,
  } = useContext(CommentContext);

  const removeComment = async () => {
    const response = await deleteComment(id);
    if (response.error) {
      setErrorActionComment(response.error.message);
    } else {
      setToggleModal(false);
      setData((prevData: Comment[]) => prevData.filter((cm) => cm.id !== id));
      if (currentIdComment === id) {
        setCurrentIdComment("");
        setInputComment("");
      }
    }
  };

  return (
    <ActionsModal setToggleModal={setToggleModal}>
      <button
        className="container-modal-actions__btn container-modal-actions__btn--danger"
        onClick={removeComment}
      >
        Eliminar
      </button>
      <button
        className="container-modal-actions__btn"
        onClick={() => {
          setCurrentIdComment(id);
          setToggleModal(false);
        }}
      >
        Editar
      </button>
    </ActionsModal>
  );
};
