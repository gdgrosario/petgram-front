import { FC, Dispatch, createContext, useState, FormEvent } from "react";

interface ICommentContext {
  currentIdComment: string;
  inputComment: string;
  setInputComment: Dispatch<string>;
  setCurrentIdComment: Dispatch<string>;
  errorActionComment: string;
  setErrorActionComment: Dispatch<string>;
}

const initiatlState: ICommentContext = {
  currentIdComment: "",
  inputComment: "",
  setInputComment: () => {},
  setCurrentIdComment: () => {},
  errorActionComment: "",
  setErrorActionComment: () => {},
};

export const CommentContext = createContext<ICommentContext>(initiatlState);

export const CommentProvider: FC = ({ children }) => {
  const [currentIdComment, setCurrentIdComment] = useState<string>("");
  const [inputComment, setInputComment] = useState<string>("");
  const [errorActionComment, setErrorActionComment] = useState<string>("");

  return (
    <CommentContext.Provider
      value={{
        currentIdComment,
        setCurrentIdComment,
        inputComment,
        setInputComment,
        errorActionComment,
        setErrorActionComment,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};
