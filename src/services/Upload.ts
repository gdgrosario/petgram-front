import { petgramAPI } from 'src/axios/axios';

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
    if (error.response) {
      return error.response.status;
    }
    return 400;
  }
};
