import { useState } from 'react';

export const useStateFormAuth = (typeForm) => {
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
    
    const changeInputValues = (event) => {
        const {name, value} = event.target
        setinputValues({...inputValues, [name]:value})
    }

    const submit = (event) => {
        event.preventDefault()

        //logic for registration or login
        if (typeForm === 'SignUp') {
            console.log(defaulValues)
        }
        //signIn

        console.log(inputValues.email, inputValues.password)
        setinputValues(defaulValues)
    }

    return {
        inputValues,
        submit,
        changeInputValues
    }
}
