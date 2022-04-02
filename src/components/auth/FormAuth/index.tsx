import { useStateFormAuth } from "@hooks/useStateFormAuth";
import { useToggle } from "@hooks/useToggle";
import { TFormAuth } from "@Types/Form";

import EyePassword from "@public/assets/svgs/icons/eye-slash-solid.svg";

import { SelectSex } from "./SelectSex";
import { GroupInputsReggister1 } from "./GroupInputsReggister1";
import { GroupInputsReggister2 } from "./GroupInputsReggister2";

interface FormAuthProps {
  typeForm: TFormAuth;
}

export const FormAuth = ({ typeForm = "SIGN_IN" }: FormAuthProps) => {
  const { inputValues, changeInputValues, submit } = useStateFormAuth(typeForm);
  const [state, toggle] = useToggle();

  return (
    <form onSubmit={submit} className="content-form-auth" action="">
      {typeForm === "SIGN_UP" && (
        <GroupInputsReggister2
          inputValues={inputValues}
          changeInputValues={changeInputValues}
        />
      )}

      <input
        onChange={(e) => changeInputValues(e)}
        name="email"
        placeholder="Correo"
        type="email"
        value={inputValues.email}
        className="content-form-auth__input"
      />

      <div className="content-form-auth__box-password">
        <input
          onChange={(e) => changeInputValues(e)}
          name="password"
          value={inputValues.password}
          placeholder="Contraseña"
          className="content-form-auth__input content-form-auth__input--password"
          type={state ? "text" : "password"}
        />

        <EyePassword
          onClick={() => toggle()}
          className={`content-form-auth__eye-password ${
            state && "content-form-auth__eye-password--active"
          }`}
        />
      </div>

      {typeForm === "SIGN_UP" && (
        <input
          onChange={(e) => changeInputValues(e)}
          name="repeatPassword"
          value={inputValues.repeatPassword}
          placeholder="Verfica la contraseña"
          className="content-form-auth__input"
          type={state ? "text" : "password"}
        />
      )}

      {typeForm === "SIGN_UP" && (
        <GroupInputsReggister1
          inputValues={inputValues}
          changeInputValues={changeInputValues}
        />
      )}

      {typeForm === "SIGN_UP" && (
        <SelectSex changeInputValues={changeInputValues} />
      )}

      <button
        type="submit"
        className={[typeForm === "SIGN_IN" && "btn-form--mt", "btn-form"].join(
          " "
        )}
      >
        {typeForm === "SIGN_UP" ? "Crear cuenta" : "Iniciá sesión "}
      </button>
    </form>
  );
};
