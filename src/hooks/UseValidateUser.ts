import { useEffect, useState } from 'react'

export const UseValidateUser = (userName: string):boolean => {
  const [validUser, setValidUser] = useState(false)

  /**
     * Valida que el usuario solo contenga:
     * - Letras a-z
     * - Numeros 0-9
     * - Caracteres especiales: _ .
     */
  const validateUserForRegex = (userName: string):boolean => {
    const regex = /^[a-z0-9_\.]+$/
    return regex.test(userName)
  }

  // #TODO: Validar que el usuario exista en la base de datos
  const getUserNamefromDB = (userName: string):void => {

  }

  useEffect(() => validateUserForRegex(userName) ? setValidUser(true) : setValidUser(false), [userName])

  return validUser
}
