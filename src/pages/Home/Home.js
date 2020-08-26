import React from 'react'
import { VscMail, VscArrowRight } from 'react-icons/vsc'

import styles from './Home.module.css'

const Home = () => {
    return (
        <div className={`${styles.container} ${styles.bgImage}`}>
            <div className={`${styles.buttonGroup}`}>
                <button className="btn primaryButton">
                    Contactanos! <VscMail />
                </button>
                <button className="btn primaryButtonOutlined">
                    Ver Proyectos <VscArrowRight />
                </button>
            </div>
        </div>
    )
}

export default Home