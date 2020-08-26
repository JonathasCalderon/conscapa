import React from 'react'
import { Link } from 'react-router-dom'

const DropDownItem = ({ children, to }) => {
    return (
        <div className="itemBox">
            <Link to={to} className="menuItem">
                {children}
            </Link>
        </div>
    )
}

export default DropDownItem