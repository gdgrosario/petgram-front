import { getAccessToken } from '@helpers/auth';
import { petgramAPI } from '../axios/axios';
import { UpdateUser, User } from '../models/User';
import { ResponseError } from 'src/models/Auth';
import { catchError } from '@helpers/errors';

const getUserProfile = async (token: string): Promise<User | ResponseError> => {
  try {
    const response = await petgramAPI.get('/users/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    return catchError(error);
  }
};

const getUserForUserName = async (
  userName: string
): Promise<User | ResponseError> => {
  try {
    const response = await petgramAPI.get(`/users/get-user-name/${userName}`);
    return response.data;
  } catch (error) {
    return catchError(error);
  }
};

const updateProfile = async (
  user: UpdateUser
): Promise<User | ResponseError> => {
  try {
    const response = await petgramAPI.put('/users', user, {
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });
    return response.data;
  } catch (error) {
    return catchError(error);
  }
};

const getUsersByNickName = async (
  nickName: string
): Promise<User[] | ResponseError> => {
  try {
    const response = await petgramAPI.get(
      `/users/get-users-by-nickname/${nickName}`
    );
    return response.data;
  } catch (error) {
    return catchError(error);
  }
};

export {
  getUserProfile,
  getUserForUserName,
  updateProfile,
  getUsersByNickName,
};
