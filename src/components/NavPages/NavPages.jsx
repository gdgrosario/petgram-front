import "./NavPages.scss";
/* svgs */
import backBtn from "assets/svgs/icons/arrow.svg";
import menuBtn from "assets/svgs/icons/bar.svg";

export function NavPages({ titleHeaderPage , history }) {
  return (
    <header className="header-nav-pages">
      <ul className="header-nav-pages__list">
        <li className="header-nav-pages__item">
          <button onClick={() => history.goBack()} className="header-nav-pages__btn">
            <img
              className="header-nav-pages__svg header-nav-pages__svg--pointer"
              src={backBtn}
              alt="back"
            />
          </button>
        </li>

        {titleHeaderPage && (
          <li className="header-nav-pages__item header-nav-pages__item--left">
            <h1 className="header-nav-pages__titlePage">{titleHeaderPage}</h1>
          </li>
        )}

        <li className="header-nav-pages__item">
          <button className="header-nav-pages__btn">
            <img
              className="header-nav-pages__svg header-nav-pages__svg--pointer"
              src={menuBtn}
              alt="back"
            />
          </button>
        </li>
      </ul>
    </header>
  );
}