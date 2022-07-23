import { ResponseError } from "./Auth";

/* TODO: Crear mas interfaces pata distintos casos de uso para mantener 
un orden y solo lo que se necesita */
interface User {
  id: string;
  name: string;
  nickname: string;
  email: string;
  raza: string;
  password: string;
  phoneNumber: string;
  birthday: string;
  sexo: string;
  biography: string;
  followeds: Friend[];
  avatar: string;
  followers: Friend[];
  numberOfFollowed: number;
  numberOfFollowers: number;
  posts: Post[];
}

interface Post {
  id: string;
  description: string;
  image: string;
  likes: number;
  comments: Comment[];
  user: UserBasic;
}

interface UserBasic {
  nickname: string;
  name: string;
  avatar: string;
}
interface Comment {
  id: string;
  comment: string;
  user: UserBasic;
}
interface Friend {
  id: string;
  name: string;
  nickname: string;
  avatar: string;
}

interface UpdateUser extends Partial<User> {}

interface GenericResponse<T> {
  data?: T;
  error?: ResponseError;
}

interface Pagination {
  skip: number;
  limit: number;
}

interface ResponsePagination<T> {
  data: T;
  count: number;
}
export type {
  User,
  UpdateUser,
  Friend,
  Post,
  Comment,
  UserBasic,
  GenericResponse,
  Pagination,
  ResponsePagination,
};
