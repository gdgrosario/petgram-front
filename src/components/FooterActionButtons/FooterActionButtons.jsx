import './FooterActionButtons.scss'

/* svgs */
import home from 'assets/svgs/icons/home.svg'
import search from 'assets/svgs/icons/search.svg'
import video from 'assets/svgs/icons/video.svg'
import store from 'assets/svgs/icons/store.svg'
import { Link } from 'react-router-dom'

const avatar = 'https://assets.teenvogue.com/photos/5776b76d924ce46478f244de/master/w_1080,h_1236,c_limit/01.png'


export const FooterActionButtons = () => {
    return (
        <footer className="footer-action-nav">
            <nav className="footer-action-nav__nav">
                <ul className="footer-action-nav__list">
                    <li className="footer-action-nav__item">
                        <Link to="/" className="footer-action-nav__link" href="/">
                            <img 
                                className="footer-action-nav__svg"
                                src={home} 
                                alt="home" />
                        </Link>
                    </li>
                    
                    <li className="footer-action-nav__item">
                        <Link to="/" className="footer-action-nav__link" href="/">
                            <img 
                                className="footer-action-nav__svg"
                                src={search} 
                                alt="search" />
                        </Link>
                    </li>
                    
                    <li className="footer-action-nav__item">
                        <Link to="/" className="footer-action-nav__link" href="/">
                            <img 
                                className="footer-action-nav__svg"
                                src={video} 
                                alt="video" />
                        </Link>
                    </li>
                    
                    <li className="footer-action-nav__item">
                        <Link to="/" className="footer-action-nav__link" href="/" >
                            <img 
                                className="footer-action-nav__svg"
                                src={store} 
                                alt="store" />
                        </Link>
                    </li>
                    
                    <li>
                        <Link to="/" className="footer-action-nav__link footer-action-nav__link--user" href="/">
                            <img 
                                className="footer-action-nav__svg footer-action-nav__svg--avatar"
                                src={avatar} 
                                alt="store" />
                        </Link>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}
