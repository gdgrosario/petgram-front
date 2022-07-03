import { getAccessToken } from '@helpers/auth';
import { petgramAPI } from '../axios/axios';
import { UpdateUser, User, UserResponse } from '../models/User';

const getUserProfile = async (token: string):Promise<UserResponse> => {
  try {
    const response = await petgramAPI.get('/users/profile', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return response.data
  } catch (error) {
    if (error.response?.data) {
      return error.response?.data
    }
    return error
  }
}

const getUserForUserName = async (userName: string):Promise<UserResponse> => {
  try {
    const response = await petgramAPI.get(`/users/get-user-name/${userName}`)
    return response.data
  } catch (error) {
    if (error.response?.data) {
      return error.response?.data
    }
    return error
  }
}

const updateProfile = async (user: UpdateUser): Promise<UserResponse> => {
  try {
    const response = await petgramAPI.put('/users', user, {
      headers: {
        Authorization: `Bearer ${getAccessToken()}`
      }
    })
    return response.data
  } catch (error) {
    if (error.response?.data) {
      return error.response?.data
    }
    return error
  }
}

const getUsersByNickName = async (nickName:string):Promise<UserResponse[]> => {
  try {
    const response = await petgramAPI.get(`/users/get-users-by-nickname/${nickName}`)
    return response.data
  } catch (error) {
    if (error.response?.data) {
      return error.response?.data
    }
    return error
  }
}

export {
  getUserProfile,
  getUserForUserName,
  updateProfile,
  getUsersByNickName
}
