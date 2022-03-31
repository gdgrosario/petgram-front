import Image from "next/image";

import { CircleStories } from "../CircleStories/CircleStories";
import photo from "@public/assets/user/simona.jpg";

import BarsMenu from "@public/assets/svgs/icons/bar.svg";
import Comment from "@public/assets/svgs/icons/chat.svg";
import Send from "@public/assets/svgs/icons/send.svg";
import Favorite from "@public/assets/svgs/icons/favorite.svg";

export const CardPost = () => {
  return (
    <div className="card-post">
      <header className="card-post__header">
        <CircleStories />
        <div className="card-post__user-info">
          <h2 className="card-post__user-name">Simona</h2>
          <b className="card-post__location">Rosario, Santa Fe</b>
        </div>
        <BarsMenu className="" />
      </header>

      {/* TODO: create carousel*/}

      <div className="carousel-photo">
        <Image className="card-post__photo" src={photo} alt="user-img" />
      </div>

      <footer className="footer-card-post">
        <section className="footer-card-post__section">
          <ul className="footer-card-post__list-footer-btns">
            <li className="footer-card-post__items-footer-btns">
              <button>
                <Favorite />
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
          <h4 className="footer-card-post__follower-like">
            Le gusta a Snoopy y 30 más
          </h4>
          <p className="footer-card-post__comment">
            <b>Simona</b> Hola a todos!
            <ul className="footer-card-post__list-hashtag">
              <li className="footer-card-post__item-hashtag">
                <a href="/">#mantita</a>
              </li>

              <li className="footer-card-post__item-hashtag">
                <a href="/">#POTD</a>
              </li>

              <li className="footer-card-post__item-hashtag">
                <a href="/">#casa</a>
              </li>

              <li className="footer-card-post__item-hashtag">
                <a href="/">#Petgram</a>
              </li>
            </ul>
          </p>
          <p className="footer-card-post__comment-follower">
            <b>Snoopy</b> Buena Manta!.
          </p>
        </section>
      </footer>
    </div>
  );
};
