import { Dispatch, useEffect, useState, FormEvent, useContext } from "react";
import { Comment, GenericResponse } from "src/models/User";
import { createComment, updateComment } from "@services/Comments";
import { CommentContext } from "../../context/ContextComment";
import { GenericAlert } from "@components/alerts/GenericAlert";
interface IFomComment {
  postId: string;
  setData: Dispatch<Comment[]>;
  data: Comment[];
}

export const FormComment = ({ postId, setData, data }: IFomComment) => {
  const [loadingComment, setLoadingComment] = useState<boolean>(false);
  const {
    currentIdComment,
    setCurrentIdComment,
    setInputComment,
    inputComment,
    setErrorActionComment,
    errorActionComment,
  } = useContext(CommentContext);

  const handleRequest = async (
    callBack: () => Promise<GenericResponse<Comment>>
  ) => {
    const response = await callBack();
    if (response.error) {
      setErrorActionComment(response.error.message);
      setCurrentIdComment("");
    } else {
      if (currentIdComment) {
        const newData = data.map((cm) =>
          cm.id === currentIdComment ? response.data : cm
        );
        setData(newData);
        setCurrentIdComment("");
      } else {
        if (data) {
          setData([...data, response.data]);
        } else {
          setData([response.data]);
        }
      }
    }
  };

  const handleComment = async (e: FormEvent) => {
    e.preventDefault();
    if (inputComment.trim() !== "") {
      setErrorActionComment("");
      setLoadingComment(true);

      if (currentIdComment) {
        await handleRequest(() =>
          updateComment(currentIdComment, inputComment)
        );
      } else {
        await handleRequest(() =>
          createComment({ comment: inputComment, postId })
        );
      }
    }

    setLoadingComment(false);
    setInputComment("");
  };

  useEffect(() => {
    if (currentIdComment) {
      const findCommentForPostId = data.find(
        (cm) => cm.id === currentIdComment
      );
      setInputComment(findCommentForPostId.comment);
    }
  }, [currentIdComment]);

  return (
    <>
      <form onSubmit={handleComment}>
        <textarea
          value={inputComment}
          onChange={(e) => setInputComment(e.target.value)}
          placeholder="Escribe un comentario"
        />
        <button>
          {loadingComment
            ? "Loading...."
            : currentIdComment
            ? "Actualizar"
            : "Commentar"}
        </button>
      </form>
      {errorActionComment && (
        <GenericAlert
          closeAlert={setErrorActionComment}
          message={errorActionComment}
        />
      )}
    </>
  );
};
