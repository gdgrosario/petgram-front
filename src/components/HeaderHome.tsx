import Link from "next/link";

import Logo from "@public/assets/svgs/Logo.svg";
import AddHistory from "@public/assets/svgs/icons/add_history.svg";
import Message from "@public/assets/svgs/icons/message.svg";
import Favorite from "@public/assets/svgs/icons/favorite.svg";

export const HeaderHome = () => {
  return (
    <header className="header-home container-global">
      <Logo className="header-logo" />
      <nav className="header-home__nav">
        <ul className="header-home__list">
          <li className="header-home__item header-home__item--box">
            <Link href="/">
              <a className="header-home__link">
                <AddHistory className="header-home__icon" />
              </a>
            </Link>
          </li>
          <li className="header-home__item">
            <Link href="/">
              <a className="header-home__link">
                <Favorite className="header-home__icon" />
              </a>
            </Link>
          </li>
          <li className="header-home__item">
            <Link href="/">
              <a className="header-home__link">
                <Message className="header-home__icon" />
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
