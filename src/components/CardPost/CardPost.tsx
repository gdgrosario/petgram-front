import Image from 'next/image'

import { CircleStories } from './ProfilePhoto'

import BarsMenu from '@public/assets/svgs/icons/bar.svg'
import Comment from '@public/assets/svgs/icons/chat.svg'
import Send from '@public/assets/svgs/icons/send.svg'
import Favorite from '@public/assets/svgs/icons/favorite.svg'
import Link from 'next/link'

interface ICardPost {
  user: {
    name: string
    nickname: string
    avatar?: string
  }
  description: string
  image: string
  
}
export const CardPost = ({user, description, image}:ICardPost) => {
  return (
    <div className="card-post">
      <header className="card-post__header">
        <CircleStories />
        <div className="card-post__user-info">
          <Link href={`/${user.nickname}`}>
            <a className="card-post__user-name">
              {user.nickname}
            </a>
          </Link>
          <b className="card-post__name">{user.name}</b>
        </div>
        <BarsMenu className="" />
      </header>

      {/* TODO: create carousel */}

      <div className="carousel-photo">
        <Image
          height={600}
          width={600}
          priority
          className="card-post__photo"
          src={image}
          alt="user-img" />
      </div>

      <p className='card-post__description'>
        {description}
      </p>

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
          <div className="footer-card-post__comment">
            <b>Simona</b> Hola a todos!
          </div>
          <p className="footer-card-post__comment-follower">
            <b>Snoopy</b> Buena Manta!.
          </p>
        </section>
      </footer>
    </div>
  )
}
