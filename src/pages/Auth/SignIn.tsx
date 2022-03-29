import { FormAuth } from "@components/auth/FormAuth";
/* import { ReactComponent as Logo } from "assets/svgs/Logo.svg";
import { ReactComponent as GradientFooter } from "assets/svgs/gradient.svg"; */
import { FooterForm } from '@components/auth/FooterForm';

const SignIn = () => {
  return (
    <div className="container-global content-page-auth">
      {/* <Logo className="content-page-auth__icon" /> */}
      <h1 className="content-page-auth__title">
        Ingresa en tu cuenta
      </h1>

      <FormAuth typeForm="SignIN" />

      <FooterForm
        title="¿No tienes una cuenta?"
        textLInk="¡Crear una ahora!"
        route="/Auth/SignUp"
      />

      {/* <GradientFooter className="content-page-auth__gradient-footer"/> */}
    </div>
  );
}

export default SignIn