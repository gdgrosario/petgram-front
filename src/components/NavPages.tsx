/* svgs */
import { useRouter } from 'next/router';
import BackBtn from '@public/assets/svgs/icons/arrow.svg';

export function NavPages({ titleHeaderPage }) {
  const router = useRouter();

  return (
    <header className="header-nav-pages">
      <ul className="header-nav-pages__list">
        <li className="header-nav-pages__item">
          <button
            onClick={() => router.back()}
            className="header-nav-pages__btn"
          >
            <BackBtn className="header-nav-pages__svg header-nav-pages__svg--pointer" />
          </button>
        </li>

        {titleHeaderPage && (
          <li className="header-nav-pages__item header-nav-pages__item--left">
            <h1 className="header-nav-pages__titlePage">{titleHeaderPage}</h1>
          </li>
        )}
      </ul>
    </header>
  );
}
