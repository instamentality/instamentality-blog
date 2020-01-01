import React, { useState } from 'react';

const Menu = () => {
    //using react hooks
    const [active, setActive] = useState(false)
    const classes = "hamburger hamburger--collapse"
    const toggle = () => active ? `${classes} is-active` : classes
    return (
        <button
            onClick={() => setActive(!active)}
            className={toggle()} type="button">
            <span className="hamburger-box">
                <span className="hamburger-inner"></span>
            </span>
        </button>
    );
}

export default Menu;