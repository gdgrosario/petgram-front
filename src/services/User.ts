import { petgramAPI } from '../axios/axios';
import { User } from '../models/User';

const getUserProfile = async (token: string):Promise<User> => {
  try {
    const response = await petgramAPI.get<User>('/users/profile', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return response.data
  } catch (error) {
    return error.response.data
  }
}

const getUserForUserName = async (userName: string):Promise<User> => {
  try {
    const response = await petgramAPI.get<User>(`/users/get-user-name/${userName}`)
    return response.data
  } catch (error) {
    return error.response.data
  }
}
export {
  getUserProfile,
  getUserForUserName
}
