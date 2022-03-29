/* import { ReactComponent as Logo } from "assets/svgs/Logo.svg"; */
import { FormAuth } from "@components/auth/FormAuth";

import { FooterForm } from "@components/auth/FooterForm";
const SignUp = () => {

    return (
        <div className="container-global content-page-auth">
            {/* <Logo className="content-page-auth__icon" /> */}
            <h1 className="content-page-auth__title">
                Crea una cuenta
            </h1>
            
            <FormAuth typeForm="SignUp" />

            <FooterForm
                title="¿Ya tienes una cuenta?"
                textLInk="¡Ingresa ahora!"
                route="/Auth/SignIn"
            /> 
            
        </div>
    )
}
export default SignUp