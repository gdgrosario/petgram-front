import {
  Dispatch,
  SetStateAction,
  useState,
  useContext,
  useEffect,
} from "react";
import Comment from "@public/assets/svgs/icons/chat.svg";
import Send from "@public/assets/svgs/icons/send.svg";
import Favorite from "@public/assets/svgs/icons/favorite.svg";
import { createLike, removeLike as removeLikeService } from "@services/Posts";
import { AuthContext } from "../../context/ContextProvider";
import { UserBasic } from "src/models/User";
import { useRef } from "react";
import { ProfilePhoto } from "./ProfilePhoto";

interface IControllerLikes {
  numberOfLikes: number;
  numberOfComments: number;
  postId: string;
  userLikes: UserBasic[];
  setToggleModal: Dispatch<SetStateAction<boolean>>;
}

export const ControllerLikes = ({
  numberOfComments,
  numberOfLikes,
  postId,
  setToggleModal,
  userLikes,
}: IControllerLikes) => {
  const { user } = useContext(AuthContext);
  const [isLiked, setIsLiked] = useState(false);

  const [numberLikes, setNumberLikes] = useState(numberOfLikes);
  const [errorAction, setErrorAction] = useState("");
  const [activeAnimation, setActiveAnimation] = useState(false);

  useEffect(() => {
    if (userLikes) {
      setIsLiked(userLikes.some((userLike) => userLike.id === user?.id));
    }
  }, [user]);

  const addLike = async () => {
    const response = await createLike(postId);
    if (response.data === 200) {
      setIsLiked(true);
      setActiveAnimation(true);
      setNumberLikes(numberLikes + 1);
    } else {
      setErrorAction(response.error.message);
    }
  };

  const removeLike = async () => {
    const response = await removeLikeService(postId);
    if (response.data === 200) {
      setIsLiked(false);
      setNumberLikes(numberLikes - 1);
      setActiveAnimation(false);
    } else {
      setErrorAction(response.error.message);
    }
  };

  const handleLike = async () => {
    if (isLiked) {
      await removeLike();
    } else {
      await addLike();
    }
  };

  const showMessageLikes = () =>
    userLikes.length > 1
      ? `Le gusta a ${userLikes[0].nickname} y ${
          userLikes.length - 1
        } personas mas`
      : `Le gusta a ${userLikes[0].nickname}`;

  return (
    <section className="footer-card-post__section">
      <ul className="footer-card-post__list-footer-btns">
        <li className="footer-card-post__items-footer-btns">
          <div>
            <button onClick={handleLike}>
              <Favorite
                className={`like ${isLiked ? "isLiked" : ""} ${
                  activeAnimation ? "animation" : ""
                }`}
              />
            </button>
            <b>{numberLikes}</b>
            <div>
              {userLikes &&
                userLikes.map((userLike) => (
                  <ProfilePhoto
                    key={userLike.id}
                    className="profile-photo-preview"
                    size="extraSmall"
                  />
                ))}
            </div>
          </div>
        </li>
        <li
          onClick={() => setToggleModal((prevState) => !prevState)}
          className="footer-card-post__items-footer-btns"
        >
          <button>
            <Comment />
          </button>
          {<b>{numberOfComments}</b>}
        </li>
      </ul>
      {numberLikes && userLikes && numberLikes > 0 ? (
        <h4 className="footer-card-post__follower-like">
          {showMessageLikes()}
        </h4>
      ) : null}
    </section>
  );
};
