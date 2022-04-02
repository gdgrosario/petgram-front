import Link from "next/link";
import { getActionButtons } from "@helpers/getActionButtons";

export const FooterActionButtons = () => {
  return (
    <footer className="footer-action-nav">
      <nav className="footer-action-nav__nav">
        <ul className="footer-action-nav__list">
          <RenderButtons />
        </ul>
      </nav>
    </footer>
  );
};

const RenderButtons = () => (
  <>
    {getActionButtons.map(({ id, path, alt, icon: Icon, src }) => (
      <li key={id} className="footer-action-nav__item">
        <Link href={path}>
          <a
            className={`footer-action-nav__link ${
              alt === "avatar" ? "footer-action-nav__link--user" : ""
            }`}
          >
            {Icon ? (
              <Icon className="footer-action-nav__svg" />
            ) : (
              <img
                className={`footer-action-nav__img ${
                  alt === "avatar" ? "footer-action-nav__svg--avatar" : ""
                }`}
                src={src}
                alt={alt}
              />
            )}
          </a>
        </Link>
      </li>
    ))}
  </>
);
