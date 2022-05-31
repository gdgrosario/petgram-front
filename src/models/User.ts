import { responseError } from './Auth';

export interface User extends responseError {
    name: string,
    nickname: string,
    email: string,
    raza: string,
    password: string,
    repeatPassword: string,
    phoneNumber: string,
    birthday: Date,
    sexo: string
}
