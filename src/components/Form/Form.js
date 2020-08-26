import React from 'react'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'

import { MessageTemplate } from '../'
import styles from './Form.module.css'

const onSubmit = data => {
    alert(JSON.stringify(data))
}

const Form = () => {
    const { register, handleSubmit, errors, formState } = useForm({
        mode: "onChange"
    })

    const { isValid } = formState

    return (
        <form className={styles.container} onSubmit={handleSubmit(onSubmit)} >

            <h1>Contactanos</h1>

            <label htmlFor="firstName">Nombre:</label>
            <input type="text"
                placeholder="Nombre"
                name="firstName"
                ref={register({ required: "El nombre es obligatorio!" })}
                className={styles.formInput}
            />
            <ErrorMessage
                errors={errors}
                name="firstName"
                render={({ message }) => (
                    <MessageTemplate>
                        {message}
                    </MessageTemplate>
                )}
            />

            <label htmlFor="email">Correo:</label>
            <input type="email"
                placeholder="alguien@ejemplo.com"
                name="formEmail"
                ref={register({ required: "El correo es obligatorio", pattern: { value: /^\S+@\S+$/i, message: "Ingrese un email valido!" } })}
                className={styles.formInput}
            />
            <ErrorMessage
                errors={errors}
                name="formEmail"
                render={({ message }) => (
                    <MessageTemplate>
                        {message}
                    </MessageTemplate>
                )}
            />

            <label htmlFor="message">Mensaje:</label>
            <textarea name="message"
                placeholder="Mensaje..."
                ref={register({ required: "El mensaje debe ser ingresado de manera obligatoria" })}
                className={styles.formInput}
            />
            <ErrorMessage
                errors={errors}
                name="message"
                render={({ message }) => (
                    <MessageTemplate>
                        {message}
                    </MessageTemplate>
                )}
            />

            <input
                className="btn primaryButton"
                type="submit"
                value="Enviar"
                disabled={!isValid}
            />
        </form >
    )
}

export default Form