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
  followeds: string[];
}


interface UserResponse extends User, ResponseError{}

interface UpdateUser extends Partial<User>{}

export type{
  User,
  UserResponse,
  UpdateUser
}