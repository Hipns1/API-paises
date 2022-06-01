import React, { useEffect, useState } from 'react';
/* import styles from "../Styles/Nav.module.scss"; */

const NavBar = () => {

    const [isDark, setIsDark] = useState(true);

    const handleTheme = () => {
        document.body.classList.add("light");
        if (isDark) {
            setIsDark(!isDark);
            document.body.classList.remove("dark");
            document.body.classList.add("light");
        } else {
            setIsDark(!isDark);
            document.body.classList.remove("light");
            document.body.classList.add("dark");
        }
    }

    useEffect(() => {
        handleTheme();
    }, []);

    return (
        <div className="nav_container">
            <div className="nav_logo">
                <h1>Where in the world?</h1>
            </div>
            <div className="nav_theme">
                <button id="theme" onClick={() => handleTheme()}>
                    {
                        isDark
                            ? <h1><i className="fa-solid fa-sun"></i>Light mode</h1>
                            : <h1><i className="fa-solid fa-moon"></i>Dark mode</h1>
                    }
                </button>

            </div>
        </div>
    )
}

export default NavBar