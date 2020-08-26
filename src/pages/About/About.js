import React from 'react'

import styles from './About.module.css'
import svgImage from '../../assets/svg/construction.svg'

function About() {
    return (
        <div className={`${styles.container} ${styles.bgImage}`}>
            <div className={styles.svgBackground}>
                <h1 className={styles.title}>Amamos lo que hacemos!</h1>
                <p className={styles.subtitle}>La empresa fue fundada por el arquitecto Martin Calderon.</p>
                <img src={svgImage} alt="under construction" className={styles.img} />
            </div>
        </div>
    )
}

export default About
