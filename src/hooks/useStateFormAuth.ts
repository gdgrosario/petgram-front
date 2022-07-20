import { TFormAuth, IFormAuthData } from "src/models/Form";
import { ChangeEvent, FormEvent, useState, useContext } from "react";
import { SignIn, SignUp } from "@services/Auth";
import { setCookies } from "cookies-next";
import { validateForm } from "@helpers/validateForm";
import { user_token } from "../constants/Auth";
import router from "next/router";
import { AuthContext } from "../context/ContextProvider";
import axios from "axios";

export const useStateFormAuth = (typeForm: TFormAuth) => {
  const { setUser } = useContext(AuthContext);
  const defaulValues: IFormAuthData = {
    name: "",
    nickname: "",
    email: "",
    raza: "",
    password: "",
    repeatPassword: "",
    phoneNumber: "",
    birthday: new Date(),
    sexo: "Masculino",
  };

  const [inputValues, setinputValues] = useState(defaulValues);
  const [errorsForm, setErrorsForm] = useState("");

  const changeInputValues = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setinputValues({ ...inputValues, [name]: value });
  };

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    const err = validateForm({
      inputValues,
      typeForm,
    });
    setErrorsForm(err);

    if (typeForm === "SIGN_IN") {
      if (!err) {
        const { data, error } = await SignIn(inputValues);
        if (data?.access_token) {
          setUser(data.user);
          setCookies(user_token, data.access_token);
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${data.access_token}`;
          router.push("/");
        } else {
          setErrorsForm(error.message);
        }
      }
    } else if (typeForm === "SIGN_UP") {
      if (!err) {
        const { data, error } = await SignUp(inputValues);
        if (data?.access_token) {
          setUser(data.user);
          setCookies(user_token, data.access_token);
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${data.access_token}`;
          router.push("/");
        } else {
          setErrorsForm(error.message);
        }
      }
    }
  };

  return {
    inputValues,
    submit,
    changeInputValues,
    errorsForm,
    setErrorsForm,
  };
};
