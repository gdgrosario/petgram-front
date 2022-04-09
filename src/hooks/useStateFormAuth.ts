import { TFormAuth } from '@Types/Form'
import { ChangeEvent, FormEvent, useState } from 'react'
import { SignIn } from '@services/Auth'
import { validateForm } from '@helpers/validateForm'

export const useStateFormAuth = (typeForm: TFormAuth) => {
  const defaulValues = {
    name: '',
    userName: '',
    email: '',
    raza: '',
    password: '',
    repeatPassword: '',
    tel: '',
    date: '',
    sex: 'Masculino'
  }

  const [inputValues, setinputValues] = useState(defaulValues)
  const [errorsForm, setErrorsForm] = useState('')

  const changeInputValues = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setinputValues({ ...inputValues, [name]: value })
  }

  const submit = async (event: FormEvent) => {
    event.preventDefault()

    // Inicio
    if (typeForm === 'SIGN_IN') {
      const err = validateForm({
        inputValues,
        typeForm
      })

      setErrorsForm(err)

      if (err === '') {
        const response = await SignIn(inputValues)
        if (!response.message) {
          localStorage.setItem('token', response.access_token)
          localStorage.setItem('user', JSON.stringify(response.user))
        } else {
          setErrorsForm(response.message)
        }
      }
    } else if (typeForm === 'SIGN_UP') {
      // Registro
    }
  }

  return {
    inputValues,
    submit,
    changeInputValues,
    errorsForm
  }
}
