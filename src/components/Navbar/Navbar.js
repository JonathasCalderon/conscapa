import React from "react"

import styles from './Navbar.module.css'

const Navbar = ({ children }) => {
    return (
        <div className={`navbar`}>
            <ul className={styles.navList}>
                {children}
            </ul>
        </div>
    )
}

export default Navbar
