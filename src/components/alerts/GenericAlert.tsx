import { Dispatch, SetStateAction, useEffect, useRef } from "react";

interface IGenericAlert {
  message: string;
  closeAlert: Dispatch<SetStateAction<string>>;
}

export const GenericAlert = ({ message, closeAlert }: IGenericAlert) => {
  useEffect(() => {
    setTimeout(() => {
      closeAlert("");
    }, 3000);
  }, []);
  return (
    <>
      <div>{message}</div>
      <style jsx>{`
        div {
          position: fixed;
          z-index: 3;
          left: 50%;
          bottom: 0;
          transform: translate(-50%, -50%);
          background-color: #363434;
          color: #fff;
          width: 210px;
          height: 50px;
          border-radius: 5px;
          display: grid;
          place-content: center;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.242);
        }
      `}</style>
    </>
  );
};
