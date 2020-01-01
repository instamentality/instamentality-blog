import React, { useState, useEffect } from 'react';

const Menu = () => {
    //using react hooks
    const baseClasses = "hamburger hamburger--collapse"
    const [active, setActive] = useState(false)
    const [classes, setClasses] = useState("hamburger hamburger--collapse")
    useEffect(() => { 
        active ? setClasses(`${baseClasses} is-active`) : setClasses(baseClasses)
    }, [active])
    return (
        <button
            onClick={() => setActive(!active)}
            className={classes} type="button">
            <span className="hamburger-box">
                <span className="hamburger-inner"></span>
            </span>
        </button>
    );
}

export default Menu;