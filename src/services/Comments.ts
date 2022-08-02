import { catchError } from "@helpers/errors";
import {
  Comment,
  GenericResponse,
  Pagination,
  ResponsePagination,
} from "src/models/User";
import { petgramAPI } from "../axios/axios";

interface ICreateComment {
  postId: string;
  comment: string;
}

interface ResponseComment {
  data: Comment;
  message: string;
}

const getCommentsInPost = async (
  postId: string,
  { skip, limit }: Pagination
): Promise<GenericResponse<ResponsePagination<Comment[]>>> => {
  try {
    const response = await petgramAPI.get<ResponsePagination<Comment[]>>(
      `/comments/get-comments-in-post/${postId}?skip=${skip}&limit=${limit}`
    );

    const { data: comment, count } = response.data;

    return {
      data: {
        data: comment,
        count,
      },
    };
  } catch (error) {
    return {
      error: catchError(error),
    };
  }
};

const createComment = async (
  data: ICreateComment
): Promise<GenericResponse<Comment>> => {
  try {
    const response = await petgramAPI.post<ResponseComment>("/comments", data);
    return {
      data: response.data.data,
    };
  } catch (e) {
    return {
      error: catchError(e),
    };
  }
};

const deleteComment = async (id: string): Promise<GenericResponse<number>> => {
  try {
    const response = await petgramAPI.delete<{ message: string }>(
      `/comments/${id}`
    );

    return {
      data: response.status,
    };
  } catch (error) {
    return {
      error: catchError(error),
    };
  }
};

const updateComment = async (
  id: string,
  comment: string
): Promise<GenericResponse<Comment>> => {
  try {
    const response = await petgramAPI.put<ResponseComment>(`/comments/${id}`, {
      comment,
    });
    const { data: commentData } = response.data;
    return {
      data: commentData,
    };
  } catch (error) {
    return {
      error: catchError(error),
    };
  }
};

export { getCommentsInPost, createComment, deleteComment, updateComment };
