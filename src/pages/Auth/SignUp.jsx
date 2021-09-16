import { ReactComponent as Logo } from "assets/svgs/Logo.svg";
import { FormAuth } from "components/FormAuth/FormAuth";
import { Link } from "react-router-dom";
export const SignUp = () => {

    return (
        <div className="container-global content-page-auth">
            <Logo className="content-page-auth__icon" />
            <h1 className="content-page-auth__title">
                Crea una cuenta
            </h1>
            
            <FormAuth typeForm="SignUp" />

            <footer className="footer-auth">
                <div>
                    <h3 className="footer-auth__title">
                        ¿Ya tienes una cuenta?
                    </h3>
                    <Link className="footer-auth__link"to="/login">¡Ingresa ahora!</Link>
                </div>
                <p className="footer-auth__terms">
                    Términos y condiciones de uso
                </p>
            </footer>
        </div>
    )
}
