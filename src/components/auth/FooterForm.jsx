import { Link } from "react-router-dom"

export const FooterForm = ({title, route = "/", textLInk}) => {
    return (
        <footer className="footer-auth">
            <div>
                <h3 className="footer-auth__title">
                    {title}
                </h3>
                <Link className="footer-auth__link"to={route}>{textLInk}</Link>
            </div>
            <p className={[route === '/sign-up' && 'footer-auth__terms--mt', 'footer-auth__terms'].join(' ')}>
                Términos y condiciones de uso
            </p>
        </footer>
    )
}
