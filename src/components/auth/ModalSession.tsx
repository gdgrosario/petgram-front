import Link from "next/link";

export const ModalSession = () => {
  return (
    <section className="modal">
      <div className="modal-content modal__auth">
        <h2>Debes iniciar sesion para continuar</h2>
        <div>
          <Link href="/Auth/SignIn">
            <button className="btn-form">iniciar sesion</button>
          </Link>

          <Link href="/Auth/SignUp">
            <button className="modal__btn">crear cuenta</button>
          </Link>
        </div>
      </div>
    </section>
  );
};
