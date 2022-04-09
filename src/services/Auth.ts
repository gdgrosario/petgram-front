import { responseAuth } from '@Types/Auth'
import { petgramAPI } from '../axios/axios'

const SignIn = async ({ email, password }):Promise<responseAuth> => {
  try {
    const response = await petgramAPI.post('auth/login', {
      email,
      password
    })
    return await response.data
  } catch (e) {
    return e
  }
}

export {
  SignIn
}
