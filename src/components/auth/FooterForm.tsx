import Link from "next/link"

export const FooterForm = ({title, route = "/", textLInk}) => {
    return (
        <footer className="footer-auth">
            <div>
                <h3 className="footer-auth__title">
                    {title}
                </h3>
                <Link href={route}>
                    <a className="footer-auth__link" >{textLInk}</a>
                </Link>
            </div>
            <p className={[route === '/sign-up' && 'footer-auth__terms--mt', 'footer-auth__terms'].join(' ')}>
                Términos y condiciones de uso
            </p>
        </footer>
    )
}
