import { responseError } from './Auth';

export interface User extends responseError {
  id: string;
  name: string;
  nickname: string;
  email: string;
  raza: string;
  password: string;
  repeatPassword: string;
  phoneNumber: string;
  birthday: string;
  sexo: string;
  biography: string;
  followeds: string[];
}
