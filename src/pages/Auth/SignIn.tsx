import { FormAuth } from '@components/auth/FormAuth'
import Logo from '@public/assets/svgs/Logo.svg'
import GradientFooter from '@public/assets/svgs/gradient.svg'
import { FooterForm } from '@components/auth/FooterForm'

const SignIn = () => {
  return (
    <>
      <main className="container-global content-page-auth">
        <Logo className="content-page-auth__icon" />
        <h1 className="content-page-auth__title">Ingresa en tu cuenta</h1>

        <FormAuth typeForm="SIGN_IN" />

        <FooterForm
          title="¿No tienes una cuenta?"
          textLInk="¡Crear una ahora!"
          route="/Auth/SignUp"
        />
      </main>

      <GradientFooter className="content-page-auth__gradient-footer" />
    </>
  )
}

export default SignIn
