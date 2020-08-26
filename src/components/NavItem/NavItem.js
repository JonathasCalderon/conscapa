import React, { useState } from 'react'

import styles from './NavItem.module.css'

const NavItem = ({ children, itemContent }) => {
    const [open, setOpen] = useState(false)

    return (
        <li onClick={() => setOpen(!open)} className={`${styles.menuItem}`}>
            {itemContent}

            {open && children}
        </li>
    )
}

export default NavItem