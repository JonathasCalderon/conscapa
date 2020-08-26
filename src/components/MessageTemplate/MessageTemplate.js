import React from 'react'
import { VscWarning } from 'react-icons/vsc'

import styles from './MessageTemplate.module.css'

const MessageTemplate = ({ children }) => {
    return (
        <div className={styles.errorMessage}>
            <VscWarning /> <p className={styles.message}>{children}</p>
        </div>
    )
}

export default MessageTemplate