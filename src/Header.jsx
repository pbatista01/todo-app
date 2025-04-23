import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import lightIcon from './assets/icon-moon.svg';
import darkIcon from './assets/icon-sun.svg';
import './header.css';

function Header() {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={`header ${darkTheme ? 'dark' : 'light'}`}>
      <div className="header-content">
        <h1 className="header-text">T O D O</h1>
        <img
          className="header-icon"
          onClick={toggleTheme}
          src={darkTheme ? darkIcon : lightIcon}
          alt="icon mode"
        />
      </div>
    </header>
  );
}

export default Header;
