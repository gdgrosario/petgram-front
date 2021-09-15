import { ReactComponent as Logo } from "assets/svgs/Logo.svg";
import { Link } from "react-router-dom";
export const SignUp = () => {
    return (
        <div className="container-global content-page-auth">
            <Logo className="content-page-auth__icon" />
            <h1 className="content-page-auth__title">
                Crea una cuenta
            </h1>
            <form className="content-page-auth__form" action="">
                
                <input 
                    placeholder="Nombre"
                    className="content-page-auth__input"
                    type="text" />
                
                <input 
                    placeholder="Usuario"
                    className="content-page-auth__input"
                    type="text" />
                
                <input 
                    placeholder="Correo"
                    className="content-page-auth__input"
                    type="email" />
                
               {/*  <input 
                    placeholder="Contraseña"
                    className="content-page-auth__input"
                    type="password" />
                
                <input 
                    placeholder="Verfica la contraseña"
                    className="content-page-auth__input"
                    type="password" /> */}
                
                <input 
                    placeholder="Raza"
                    className="content-page-auth__input"
                    type="text" />
                
                
                <input
                    type="text"
                    className="content-page-auth__input"
                    onFocus={
                        (e)=> {
                        e.currentTarget.type = "date";
                        e.currentTarget.focus();
                        }
                    }
                    placeholder="Fecha de nacimiento (dd/mm/yyyy)"
                />

                <input 
                    placeholder="Número de teléfono (opcional)"
                    className="content-page-auth__input"
                    type="tel" />
                
                <div className="select-sex">
                    <p className="select-sex__label">
                        Sexo
                    </p>
                    <div className="select-sex__content">
                        
                        <input value="masculino" id="masculino" type="radio" name="rad"/>
                        <label className="select-sex__sex-option" for="masculino">Masculino</label>

                        <input value="femenino" id="femenino" type="radio" name="rad"/>
                        <label className="select-sex__sex-option" for="femenino">Femenino</label>

                    </div>
                </div>

                <button className="btn-form"> 
                    Crear cuenta
                </button>

            </form>

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
