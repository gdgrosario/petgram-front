import { AxiosError } from 'axios';
import { petgramAPI } from 'src/axios/axios';

interface Response {
  message: string;
}

export const Follow = async (id: string): Promise<number> => {
  try {
    const response = await petgramAPI.post<Response>(`/users/follow/${id}`);

    return response.status;
  } catch (error: unknown) {
    const err = error as AxiosError;

    return err.response?.status || 400;
  }
};

export const UnFollow = async (id: string): Promise<number> => {
  try {
    const response = await petgramAPI.put<Response>(`/users/unfollow/${id}`);

    return response.status;
  } catch (error: unknown) {
    const err = error as AxiosError;

    return err.response?.status || 400;
  }
};
