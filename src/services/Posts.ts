import { petgramAPI } from '../axios/axios';
import { catchError } from '@helpers/errors';
import {
  Post,
  GenericResponse,
  Pagination,
  ResponsePagination,
} from 'src/models/User';

const getAllPost = async ({
  skip,
  limit,
}: Pagination): Promise<GenericResponse<ResponsePagination<Post[]>>> => {
  try {
    const response = await petgramAPI.get<ResponsePagination<Post[]>>(
      `/posts?skip=${skip}&limit=${limit}`
    );
    const { data: posts, count } = response.data;

    return {
      data: {
        data: posts,
        count,
      },
    };
  } catch (error) {
    return { error: catchError(error) };
  }
};

export { getAllPost };
