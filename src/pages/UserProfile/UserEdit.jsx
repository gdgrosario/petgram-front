import { FooterActionButtons } from "components/FooterActionButtons";
import { NavPages } from "components/NavPages";

export function UserEdit({ history }) {
  return (
    <>
      <NavPages titleHeaderPage="Edit Profile" history={history} />
      <section className="container-global">
        <form className="user-edit__form">
          {/* parte 1 */}
          <section className="user-edit__img">
            <img
              width="60"
              height="60"
              src="https://assets.teenvogue.com/photos/5776b76d924ce46478f244de/master/w_1080,h_1236,c_limit/01.png"
              alt="user"
            />
            <div>
              <h2>Quimera</h2>
              <span>Change Profile Photo</span>
            </div>
          </section>
          {/* parte 2 */}
          <section className="user-edit__input">
            <label>
              <span>First Name</span>
            </label>
            <input type="text" value="Hello" />
          </section>
          {/* parte 3 */}
          <section className="user-edit__input">
            <label>
              <span>Username</span>
            </label>
            <input type="text" value="g1hello" />
          </section>
          {/* parte 4 */}
          <section className="user-edit__input">
            <label>
              <span>Email</span>
            </label>
            <input type="email" value="hola@hola.com" />
          </section>
          {/* parte 5 */}
          <section className="user-edit__input">
            <label>
              <span>Raza</span>
            </label>
            <input type="text" value="Macho" />
          </section>
          {/* parte 6 */}
          <section className="user-edit__input">
            <label>
              <span>Bio</span>
            </label>
            <textarea rows="3">
              Donec rutrum congue leo eget malesuada. Cras ultricies ligula sed
              magna dictum porta. Vivamus magna justo, lacinia eget consectetur
              sed, convallis at tellus
            </textarea>
          </section>
          {/* parte 6 */}
          <section className="user-edit__input">
            <label>
              <span>Fecha nacimiento</span>
            </label>
            <input type="text" value="2020/07/10" />
          </section>
          {/* parte 7 */}
          <section className="user-edit__input">
            <label>
              <span>Telefono</span>
            </label>
            <input type="text" value="+57 3223341221" />
          </section>
        </form>
      </section>
      <FooterActionButtons />
    </>
  );
}
