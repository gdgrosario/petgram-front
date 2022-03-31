import { TFormAuth } from '@Types/Form';
import { ChangeEvent, FormEvent, useState } from 'react';

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
        sex: 'Masculino',
    }

    const [inputValues, setinputValues] = useState(defaulValues)
    
    const changeInputValues = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setinputValues({...inputValues, [name]:value})
    }

    const submit = (event: FormEvent) => {
        event.preventDefault()

        //Inicio
        if (typeForm === 'SIGN_IN') {
            console.log(defaulValues)
        }
        //Registro

        setinputValues(defaulValues)
    }

    return {
        inputValues,
        submit,
        changeInputValues
    }
}
