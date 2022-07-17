import { catchError } from '@helpers/errors';
import { petgramAPI } from '../axios/axios';
import { ResponseAuth, ResponseError } from '../models/Auth';

const SignIn = async ({
  email,
  password,
}): Promise<ResponseAuth | ResponseError> => {
  try {
    const response = await petgramAPI.post('auth/login', {
      email,
      password,
    });
    return await response.data;
  } catch (e) {
    return catchError(e);
  }
};

const SignUp = async (data): Promise<ResponseAuth | ResponseError> => {
  try {
    const response = await petgramAPI.post('auth/register', data);
    return await response.data;
  } catch (e) {
    return catchError(e);
  }
};

export { SignIn, SignUp };
