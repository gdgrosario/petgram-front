import { petgramAPI } from '../axios/axios';
import { User } from '../models/User';
const getUserProfile = async (token: string):Promise<User> => {
  console.log(token)
  try {
    const response = await petgramAPI.get<User>('/users/profile', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return response.data
  } catch (error) {
    console.log(error.response.data)
  }
}

export {
  getUserProfile
}
