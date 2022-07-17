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
  [key: string]: any;
}

interface Post {
  id: string;
  description: string;
  image: string;
  likes: number;
  comments: Comment[];
  user: UserBasic;
  [key: string]: any;
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
  [key: string]: any;
}
interface Friend {
  id: string;
  name: string;
  nickname: string;
  avatar: string;
  [key: string]: any;
}

interface UpdateUser extends Partial<User> {
  [key: string]: any;
}

export type { User, UpdateUser, Friend, Post, Comment, UserBasic };
