import { FC, Dispatch, SetStateAction } from "react";
import BackBtn from "@public/assets/svgs/icons/arrow.svg";
interface IModal {
  title: string;
  toggleModal: Dispatch<SetStateAction<boolean>>;
}
export const Modal: FC<IModal> = ({ title, children, toggleModal }) => {
  return (
    <>
      <div className="generic-modal__container-modal">
        <header className="header-nav-pages">
          <ul className="header-nav-pages__list">
            <li className="header-nav-pages__item">
              <button
                onClick={() => toggleModal((prevState) => !prevState)}
                className="header-nav-pages__btn"
              >
                <BackBtn className="header-nav-pages__svg header-nav-pages__svg--pointer" />
              </button>
            </li>

            <li className="header-nav-pages__item header-nav-pages__item--left">
              <h1 className="header-nav-pages__titlePage">{title}</h1>
            </li>
          </ul>
        </header>

        <div className="generic-modal__content-children-modal">{children}</div>
      </div>

      <style jsx>{`
        header {
          justify-content: left;
        }
      `}</style>
    </>
  );
};
