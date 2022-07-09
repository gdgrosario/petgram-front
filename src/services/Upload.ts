import { AxiosError } from 'axios';
import { petgramAPI } from 'src/axios/axios';

interface Data {
  image: File;
  description: string;
}

export const Upload = async (data: Data): Promise<number> => {
  try {
    const formData = new FormData();

    formData.append('name', data.image.name as string);
    formData.append('file', data.image);

    console.log({
      formData,
      des: data.description,
      image: data.image,
    });

    // const response = await petgramAPI.post<Response>(`/users/follow/${id}`);

    // return response.status;
  } catch (error: unknown) {
    const err = error as AxiosError;

    return err.response?.status || 400;
  }
};
