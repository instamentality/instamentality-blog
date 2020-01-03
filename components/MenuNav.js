import React, { useState, useEffect } from 'react'
import "../assets/hamburgers.css"

const MenuNav = ({onActive}) => {
    //using react hooks
    const baseClasses = "hamburger hamburger--collapse"
    //onActive is a side-effect that helps change the rest of the 
    //page when the hamburger is clicked
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