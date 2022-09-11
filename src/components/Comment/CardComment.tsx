import { ProfilePhoto } from "@components/ProfilePhoto";
import Link from "next/link";
import { Dispatch, useState, useContext } from "react";
import BarsMenu from "@public/assets/svgs/icons/bar.svg";
import { ActionModalComment } from "./ActionModalComment";
import { Comment } from "src/models/User";
import { useOwner } from "../../hooks/useOwner";

interface ICardComment {
  nickname: string;
  comment: string;
  avatar: string;
  userId?: string;
  id?: string;
  showButton?: boolean;
  setData?: Dispatch<Comment[]>;
}
export const CardComment = ({
  nickname,
  comment,
  avatar,
  id,
  showButton,
  setData,
  userId,
}: ICardComment) => {
  const [toggleModal, setToggleModal] = useState(false);
  const isOwner = useOwner(userId);
  return (
    <>
      <div className="card-comment">
        <header className="card-comment__header">
          <Link href={`/${nickname}`}>
            <a>
              <ProfilePhoto size="small" profileAvatar={avatar} />
              <b>{nickname}</b>
            </a>
          </Link>
          {showButton && isOwner && (
            <button
              onClick={() => setToggleModal(!toggleModal)}
              className="card-comment__bars-menu-btn"
            >
              <BarsMenu />
            </button>
          )}
        </header>
        <p>{comment}</p>
      </div>

      {toggleModal && (
        <ActionModalComment
          id={id}
          setToggleModal={setToggleModal}
          setData={setData}
        />
      )}

      <style jsx>{`
        header {
          justify-content: space-between;
        }
      `}</style>
    </>
  );
};
