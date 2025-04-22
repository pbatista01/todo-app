import iconMode from './assets/icon-moon.svg';
import './header.css'

function Header(){
    return(
        <header className="header">
            <div>
            <h1 className="header-text">T O D O</h1>
            <img className="header-icon" src={iconMode} alt="icon mode"/>
            </div>
        </header>
    );
}

export default Header;