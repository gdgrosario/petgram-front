import { TFormAuth } from 'src/models/Form'
import { ChangeEvent, FormEvent, useState } from 'react'
import { SignIn, SignUp } from '@services/Auth';
import { setCookies } from 'cookies-next';
import { validateForm } from '@helpers/validateForm'
import { User } from '../models/User';
import { useRouter } from 'next/router';
import { user_token } from '../constants/Auth';

export const useStateFormAuth = (typeForm: TFormAuth) => {
  const router = useRouter()
  const defaulValues: User = {
    name: '',
    nickname: '',
    email: '',
    raza: '',
    password: '',
    repeatPassword: '',
    phoneNumber: '',
    birthday: new Date(),
    sexo: 'Masculino'
  }

  const [inputValues, setinputValues] = useState(defaulValues)
  const [errorsForm, setErrorsForm] = useState('')

  const changeInputValues = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setinputValues({ ...inputValues, [name]: value })
  }

  const submit = async (event: FormEvent) => {
    event.preventDefault()
    const err = validateForm({
      inputValues,
      typeForm
    })
    setErrorsForm(err)

    if (typeForm === 'SIGN_IN') {
      if (!err) {
        const response = await SignIn(inputValues)
        if (response.access_token) {
          setCookies(user_token, response.access_token)
          router.push('/')
        } else {
          setErrorsForm(response.message)
        }
      }
    } else if (typeForm === 'SIGN_UP') {
      if (!err) {
        const response = await SignUp(inputValues)
        if (response.access_token) {
          setCookies(user_token, response.access_token)
          router.push('/')
        } else {
          setErrorsForm(response.message)
        }
      }
    }
  }

  return {
    inputValues,
    submit,
    changeInputValues,
    errorsForm,
    setErrorsForm
  }
}
