import { petgramAPI } from "../axios/axios";
import { catchError } from "@helpers/errors";
import { Post, GenericResponse } from "src/models/User";

const getAllPost = async (): Promise<GenericResponse<Post[]>> => {
  try {
    const response = await petgramAPI.get<Post[]>("/posts");
    return { data: response.data };
  } catch (error) {
    return { error: catchError(error) };
  }
};

export { getAllPost };
