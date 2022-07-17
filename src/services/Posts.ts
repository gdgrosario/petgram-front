import { petgramAPI } from '../axios/axios';
import { ResponseError } from 'src/models/Auth';
import { catchError } from '@helpers/errors';
import { Post } from 'src/models/User';

const getAllPost = async (): Promise<Post[] | ResponseError> => {
  try {
    const response = await petgramAPI.get('/posts');
    return response.data;
  } catch (error) {
    return catchError(error);
  }
};

export { getAllPost };
