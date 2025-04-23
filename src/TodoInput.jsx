import './todoInput.css';
import iconCheck from './assets/icon-check.svg'
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function TodoInput(){

    const {darkTheme} = useContext(ThemeContext);

    return(
        <div className="todoInput-container">
            <input type="text" className={`todo-input ${darkTheme ? 'dark' : 'light'}`} placeholder="Create a new todo..." />
            <span className="check-icon"><img src={iconCheck} /></span>
        </div>
    );
}

export default TodoInput;