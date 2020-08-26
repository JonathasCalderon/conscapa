import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Project.module.css'

function Project({ project }) {
    const { id, name, img } = project

    return (
        <Link to={`/project/${id}`}>
            <div className={styles.container}>
                <img className={styles.img} src={img} alt={img} />
                <h5 className={styles.name}>{name}</h5>
            </div>
        </Link>
    )
}

export default Project
