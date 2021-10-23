import { ReactComponent as Logo } from "assets/svgs/Logo.svg";
import { Link } from "react-router-dom";

import {ReactComponent as AddHistory} from 'assets/svgs/icons/add_history.svg'
import {ReactComponent as Message} from 'assets/svgs/icons/message.svg'
import {ReactComponent as Favorite} from 'assets/svgs/icons/favorite.svg'

export const HeaderHome = () => {
    return (
        <header className="header-home container-global">
            <Logo className="header-logo" />
            <nav className="header-home__nav">
                <ul className="header-home__list">
                    <li className="header-home__item header-home__item--box">
                        <Link className="header-home__link" to="/">
                            <AddHistory className="header-home__icon"/>
                        </Link>
                    </li>
                    <li className="header-home__item">
                        <Link className="header-home__link" to="/">
                            <Favorite className="header-home__icon"/>
                        </Link>
                    </li>
                    <li className="header-home__item">
                        <Link className="header-home__link" to="/">
                            <Message className="header-home__icon"/>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
