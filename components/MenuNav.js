import React, { useState, useEffect } from 'react'
import "../assets/hamburgers.css"
const MenuNav = ({onActive}) => {
    //using react hooks
    const baseClasses = "hamburger hamburger--collapse"
    const [active, setActive] = useState(false)
    useEffect(() => onActive(active), [active])
    return (
        <button
            onClick={() => setActive(!active)}
            className={active ? `${baseClasses} is-active` : baseClasses} type="button">
            <span className="hamburger-box">
                <span className="hamburger-inner"></span>
            </span>
        </button>
    );
}

export default MenuNav;