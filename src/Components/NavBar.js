import React, { useState } from 'react'

const NavBar = () => {

    const [isDark, setIsDark] = useState(false);

    return (
        <div>
            <div>
                <h1>Where in the world?</h1>
            </div>
            <div>
                {
                    isDark
                        ? <div>
                            <i className="fa-solid fa-sun" style={{ color: "black" }}></i>
                            <button onClick={() => setIsDark(false)}>Light</button>
                        </div>
                        : <div>
                            <i className="fa-solid fa-moon" style={{ color: "black" }}></i>
                            <button onClick={() => setIsDark(true)}>Dark</button>
                        </div>
                }
            </div>
        </div>
    )
}

export default NavBar