import { IFormAuthData, TFormAuth } from 'src/models/Form'
import { User } from '../models/User';

interface IValidateForm {
    inputValues: IFormAuthData
    typeForm: TFormAuth
}

const validateLogin = (inputValues: IFormAuthData):string => {
  if (!inputValues.email || inputValues.email === '')
    return 'El email es requerido'
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(inputValues.email))
    return 'El email no es valido'
  else if (!inputValues.password)
    return 'La contraseña es requerida'
}

const validateSignUp = (inputValues: IFormAuthData):string => {
  if (!inputValues.name)
    return 'El nombre es requerido'
  else if (!inputValues.nickname)
    return 'El usuario es requerido'
  else if (!/^[a-z0-9_\.]+$/.test(inputValues.nickname))
    return 'El usuario no es valido'
  else if (!inputValues.email)
    return 'El email es requerido'
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(inputValues.email))
    return 'El email no es valido'
  else if (!inputValues.password)
    return 'La contraseña es requerida'
  else if (inputValues.password !== inputValues.repeatPassword)
    return 'Las contraseñas no coinciden'
  else if (!inputValues.raza)
    return 'La raza es requerida'
  else if (!inputValues.birthday)
    return 'La fecha de nacimiento es requerida'
  else if (!inputValues.sexo)
    return 'El sexo es requerido'
}


const validateFieldsProfile = (profile:User):boolean => {
  if (!profile.name)
    return true
  else if (!profile.nickname)
    return true
  else if (!/^[a-z0-9_\.]+$/.test(profile.nickname))
    return true
  else if (!profile.email)
    return true
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(profile.email))
    return true
  else if (!profile.raza) 
    return true
  else if (!/^[a-zA-Z\s]*$/.test(profile.raza))
    return true 
  else if (!profile.birthday)
    return true

  return false
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

export {
  validateFieldsProfile
}