import Link from "next/link";
import { getActionButtons } from "@helpers/getActionButtons";
import { useContext } from "react";
import { AuthContext } from "../context/ContextProvider";

export const FooterActionButtons = () => {
  const { user, error } = useContext(AuthContext);

  return (
    <footer className="footer-action-nav">
      <nav className="footer-action-nav__nav">
        <ul className="footer-action-nav__list">
          <RenderButtons />
          {user && !error && (
            <li className="footer-action-nav__item">
              <Link href={`/${user.nickname}`}>
                <a className="footer-action-nav__link footer-action-nav__link--user">
                  <img
                    className="footer-action-nav__img footer-action-nav__svg--avatar"
                    src={user.avatar}
                    alt={user.nickname}
                  />
                </a>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </footer>
  );
};

const RenderButtons = () => {
  return (
    <>
      {getActionButtons.map(({ id, path, alt, icon: Icon }) => (
        <li key={id} className="footer-action-nav__item">
          <Link href={path}>
            <a className="footer-action-nav__link">
              <Icon className="footer-action-nav__svg" />
            </a>
          </Link>
        </li>
      ))}
    </>
  );
};
