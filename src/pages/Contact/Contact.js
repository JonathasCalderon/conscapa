import React from 'react'

import { Form } from '../../components'
import styles from './Contact.module.css'

const Contact = () => {
    return (
        <div className={styles.container}>
            <div className={styles.formBox}>
                <Form />
            </div>
        </div>
    )
}

export default Contact