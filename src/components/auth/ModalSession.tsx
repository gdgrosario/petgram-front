import Link from "next/link";

export const ModalSession = () => {
  return (
    <section className="modal">
      <div className="modal-content modal__auth">
        <h2>Debes iniciar sesion para continuar</h2>
        <div>
          <Link href="/Auth/SignIn">
            <a className="btn-form">iniciar sesion</a>
          </Link>

          <Link href="/Auth/SignUp">
            <a className="modal__btn">crear cuenta</a>
          </Link>
        </div>
      </div>
    </section>
  );
};
