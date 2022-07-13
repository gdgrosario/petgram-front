import { getError } from '@helpers/errors';
import { AxiosError } from 'axios';
import { petgramAPI } from 'src/axios/axios';
import { PostResponse } from 'src/models/User';

interface Data {
  image: File;
  description: string;
}

export const Upload = async (data: Data): Promise<number> => {
  try {
    const formData = new FormData();

    formData.append('img', data.image);
    formData.append('description', data.description);

    const response = await petgramAPI.post('/posts', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.status;
  } catch (error) {
    const err: AxiosError = error;
    return err.response.status;
  }
};
