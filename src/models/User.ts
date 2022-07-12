import { ResponseError } from './Auth';

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
  user: {
    nickname: string;
    name: string;
    avatar: string;
  };
}

interface Comment {
  id: string;
  comment: string;
  user: string;
}
interface Friend {
  id: string;
  name: string;
  nickname: string;
  avatar: string;
}

interface UserResponse extends User, ResponseError {}

interface UpdateUser extends Partial<User> {}

interface PostResponse extends Post, ResponseError {}
export type {
  User,
  UserResponse,
  UpdateUser,
  Friend,
  Post,
  Comment,
  PostResponse,
};
