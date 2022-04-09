import { TFormAuth } from '@Types/Form'

interface IValidateForm {
    inputValues: any
    typeForm: TFormAuth
}

const validateLogin = (inputValues: any):string => {
  if (!inputValues.email || inputValues.email === '') {
    return 'El email es requerido'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(inputValues.email)) {
    return 'El email no es valido'
  } else if (!inputValues.password) {
    return 'La contraseña es requerida'
  } else return ''
}

const validateSignUp = (inputValues: any):string => {
  if (!inputValues.name) {
    return 'El nombre es requerido'
  } else if (!/^[a-zA-Z]+$/i.test(inputValues.name)) {
    return 'El nombre no es valido'
  } else if (!inputValues.userName) {
    return 'El usuario es requerido'
  } else if (/^[a-z0-9_\.]+$/.test(inputValues.userName)) {
    return 'El usuario no es valido'
  } else if (!inputValues.email) {
    return 'El email es requerido'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(inputValues.email)) {
    return 'El email no es valido'
  } else if (!inputValues.password) {
    return 'La contraseña es requerida'
  } else if (inputValues.password !== inputValues.repeatPassword) {
    return 'Las contraseñas no coinciden'
  } else return ''
}

export const validateForm = ({ inputValues, typeForm }:IValidateForm):string => {
  let error = ''

  if (typeForm === 'SIGN_IN') {
    error = validateLogin(inputValues)
  } else if (typeForm === 'SIGN_UP') {
    error = validateSignUp(inputValues)
  }

  return error
}
