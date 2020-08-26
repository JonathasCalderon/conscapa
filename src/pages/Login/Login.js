import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { MdBlock } from 'react-icons/md'

import { MessageTemplate } from '../../components'
import styles from './Login.module.css'

const onSubmit = data => {
    alert(JSON.stringify(data))
}

function Login() {
    const [password, setPassword] = useState("")
    const [blocked, setBlocked] = useState(false)
    const [passwordCounter, setPasswordCounter] = useState(0)
    const [blockedMessage, setBlockedMessage] = useState(<MdBlock />)
    const { register, handleSubmit, errors, formState } = useForm({
        mode: "onChange"
    })

    console.log(blocked, passwordCounter)

    useEffect(() => {
        if (password.length === 0) {
            setPasswordCounter(p => p + 1)
        }
    }, [password])

    useEffect(() => {
        if (passwordCounter > 3) {
            setBlocked(true)
            let count = 29
            setInterval(() => {
                setBlockedMessage(
                    <div className={styles.blocked}>
                        <MdBlock /> <p>Usted esta bloqueado por {count--} segundos</p>
                    </div>
                )
            }, 1000)
            setTimeout(() => {
                setBlocked(false)
            }, 30000)
        }
    }, [passwordCounter])

    const { isValid } = formState

    const handleChange = event => {
        setPassword(event.target.value)
    }

    return (
        <div className={styles.container}>
            <div className={styles.formBox}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className={styles.title}>Log In</h1>
                    <label htmlFor="username">Usuario:</label>
                    <input
                        type="text"
                        placeholder="Usuario"
                        name="username"
                        disabled={blocked}
                        className={styles.formInput}
                        ref={register({
                            required: "El nombre de usuario es obligatorio!",
                            minLength: {
                                value: 7,
                                message: "El nombre de usuario debe contener entre 7 y 30 caracteres"
                            },
                            maxLength: {
                                value: 30,
                                message: "El nombre de usuario debe contener entre 7 y 30 caracteres"
                            },
                            pattern: {
                                value: /^[^\W_]+$/,
                                message: "El nombre de usuario no puede contener caracteres especiales"
                            }
                        })}
                    />
                    <ErrorMessage errors={errors} name="username"
                        render={({ message }) => (
                            <MessageTemplate >{message}</MessageTemplate>
                        )
                        }
                    />
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        placeholder="Contraseña"
                        name="password"
                        disabled={blocked}
                        className={styles.formInput}
                        value={password}
                        onChange={handleChange}
                        ref={register({
                            required: "La contraseña es obligatoria!",
                            minLength: {
                                value: 8,
                                message: "La contraseña debe tener minimamente 8 caracteres!"
                            }
                        })}
                    />
                    <ErrorMessage errors={errors} name="password"
                        render={({ message }) => (
                            <MessageTemplate >{message}</MessageTemplate>
                        )
                        }
                    />

                    {blocked && blockedMessage}

                    <input
                        type="submit"
                        value="Log In"
                        className="btn primaryButton"
                        disabled={!isValid}
                    />
                </form>
            </div>
        </div>
    )
}

export default Login
