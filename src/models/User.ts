import { responseError } from './Auth';

/* TODO: Crear mas interfaces pata distintos casos de uso para mantener 
un orden y solo lo que se necesita */
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
