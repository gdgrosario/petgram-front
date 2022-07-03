type TFormAuth = 'SIGN_IN' | 'SIGN_UP'

interface IFormAuthData {
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

export type{
  TFormAuth,
  IFormAuthData
}
