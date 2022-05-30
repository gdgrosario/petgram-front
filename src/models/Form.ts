export type TFormAuth = 'SIGN_IN' | 'SIGN_UP'

export interface IFormAuthData {
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
