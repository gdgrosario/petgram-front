import { catchError } from "@helpers/errors";
import { GenericResponse } from "src/models/User";
import { petgramAPI } from "../axios/axios";
import { ResponseAuth, ResponseError } from "../models/Auth";

const SignIn = async ({
  email,
  password,
}): Promise<GenericResponse<ResponseAuth>> => {
  try {
    const response = await petgramAPI.post<ResponseAuth>("auth/login", {
      email,
      password,
    });
    return await { data: response.data };
  } catch (e) {
    return { error: catchError(e) };
  }
};

const SignUp = async (data): Promise<GenericResponse<ResponseAuth>> => {
  try {
    const response = await petgramAPI.post<ResponseAuth>("auth/register", data);
    return await { data: response.data };
  } catch (e) {
    return { error: catchError(e) };
  }
};

export { SignIn, SignUp };
