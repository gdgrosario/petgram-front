import { FormAuth } from "components/FormAuth/FormAuth";
import { ReactComponent as Logo } from "assets/svgs/Logo.svg";
import { ReactComponent as GradientFooter } from "assets/svgs/gradient.svg";
import { FooterForm } from "./components/FooterForm";
export function SignIn() {
  return (
    <div className="container-global content-page-auth">
      <Logo className="content-page-auth__icon" />
      <h1 className="content-page-auth__title">
        Ingresa en tu cuenta
      </h1>

      <FormAuth typeForm="SignIN" />

      <FooterForm
        title="¿No tienes una cuenta?"
        textLInk="¡Crear una ahora!"
        route="/sign-up"
      />

      <GradientFooter className="content-page-auth__gradient-footer"/>
    </div>
  );
}
