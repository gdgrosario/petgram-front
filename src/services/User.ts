import { petgramAPI } from "../axios/axios";
import { UpdateUser, User } from "../models/User";
import { ResponseError } from "src/models/Auth";
import { catchError } from "@helpers/errors";
import { GenericResponse } from "src/models/User";

const getUserProfile = async (): Promise<GenericResponse<User>> => {
  try {
    const response = await petgramAPI.get<User>("/users/profile");

    const mapData = {
      ...response.data,
      avatar: response.data.avatar
        ? response.data.avatar
        : "https://res.cloudinary.com/dlgvxohur/image/upload/v1658799916/proyectos/dhiyydnlicxpfnlabicl.webp",
    };
    return { data: mapData };
  } catch (error) {
    return { error: catchError(error) };
  }
};

const getUserForUserName = async (
  userName: string
): Promise<GenericResponse<User>> => {
  try {
    const response = await petgramAPI.get<User>(
      `/users/get-user-name/${userName}`
    );
    const mapData = {
      ...response.data,
      avatar: response.data.avatar
        ? response.data.avatar
        : "https://res.cloudinary.com/dlgvxohur/image/upload/v1658799916/proyectos/dhiyydnlicxpfnlabicl.webp",
    };
    return { data: mapData };
  } catch (error) {
    return { error: catchError(error) };
  }
};

const updateProfile = async (
  user: UpdateUser
): Promise<GenericResponse<User>> => {
  try {
    const response = await petgramAPI.put<User>("/users", user);
    const mapData = {
      ...response.data,
      avatar: response.data.avatar
        ? response.data.avatar
        : "https://res.cloudinary.com/dlgvxohur/image/upload/v1658799916/proyectos/dhiyydnlicxpfnlabicl.webp",
    };
    return { data: mapData };
  } catch (error) {
    return { error: catchError(error) };
  }
};

const getUsersByNickName = async (
  nickName: string
): Promise<GenericResponse<User[]>> => {
  try {
    const response = await petgramAPI.get<User[]>(
      `/users/get-users-by-nickname/${nickName}`
    );
    return { data: response.data };
  } catch (error) {
    return { error: catchError(error) };
  }
};

export const uploadAvatar = async (
  id: string,
  image: Blob
): Promise<GenericResponse<number>> => {
  try {
    const formData = new FormData();

    formData.append("img", image);
    formData.append("id", id);

    const response = await petgramAPI.patch("/users/upload-avatar", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return {
      data: response.status,
    };
  } catch (error) {
    return { error: catchError(error) };
  }
};

export {
  getUserProfile,
  getUserForUserName,
  updateProfile,
  getUsersByNickName,
};
