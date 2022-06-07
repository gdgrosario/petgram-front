import { petgramAPI } from '../axios/axios'
import { ResponseAuth } from '../models/Auth';

const SignIn = async ({ email, password }):Promise<ResponseAuth> => {
  try {
    const response = await petgramAPI.post('auth/login', {
      email,
      password
    })
    return await response.data
  } catch (e) {
    return e.response.data
  }
}

const SignUp = async (data): Promise<ResponseAuth> => {
  try {
    const response = await petgramAPI.post('auth/register', data)
    return await response.data
  } catch (e) {
    return e.response.data
  }
}

export {
  SignIn,
  SignUp
}
