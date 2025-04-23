import lightModeIcon from './assets/icon-moon.svg';
import darkModeIcon from './assets/icon-sun.svg';
import './header.css'
import { useState } from 'react';

function Header(){

    const [darkTheme, setDarkTheme] = useState(false);

    const changeTheme = () =>{
        setDarkTheme(!darkTheme);
    }

    return(
        <header className={`header ${darkTheme ? 'dark' : 'light'}`}>
            <div>
            <h1 className="header-text">T O D O</h1>
            <img className="header-icon" onClick={changeTheme} src={`${darkTheme ? darkModeIcon : lightModeIcon}`} alt="icon mode"/>
            </div>
        </header>
    );
}

export default Header;