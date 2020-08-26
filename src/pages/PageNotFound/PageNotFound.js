import React from 'react'
import { Link } from 'react-router-dom'

import styles from './PageNotFound.module.css'

function PageNotFound() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>404</h1>
            <p>NO SE ENCONTRO ESTA PAGINA</p>
            <Link to="/" className={styles.link}>
                <button className="btn primaryButton">Volver a Inicio</button>
            </Link>
        </div>
    )
}

export default PageNotFound
