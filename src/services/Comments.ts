import { catchError } from "@helpers/errors";
import { Comment, GenericResponse } from "src/models/User";
import { petgramAPI } from "../axios/axios";

const getCommentsInPost = async (
  postId: string
): Promise<GenericResponse<Comment[]>> => {
  try {
    const response = await petgramAPI.get<Comment[]>(
      `/comments/get-comments-in-post/${postId}`
    );
    return { data: response.data };
  } catch (error) {
    return {
      error: catchError(error),
    };
  }
};

export { getCommentsInPost };
