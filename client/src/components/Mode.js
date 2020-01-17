import React from 'react';

import { useDarkMode } from '../hooks/useDarkMode';

const Mode = () => {
    const [darkMode, setDarkMode] = useDarkMode();
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    return (
        <div className="dark-modebutton">
            <button onClick={toggleMode} className={darkMode ? 'dark-on' : 'dark-off'}>Mode</button>
        </div>
    )
}

export default Mode;