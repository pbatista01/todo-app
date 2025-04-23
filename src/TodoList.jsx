import './todoList.css';
import deleteIcon from './assets/icon-cross.svg';
import iconCheck from './assets/icon-check.svg';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function TodoList(){

    const {darkTheme} = useContext(ThemeContext);

    return(
        <section className="todos">
        <ul className={`todo-list ${darkTheme ? 'dark' : 'light'}`}>
            <li className={`todo-item ${darkTheme ? 'dark' : 'light'}`}><span className="check-icon"><img src={iconCheck} /></span>Jog around the park<img src={deleteIcon} alt="delete icon" className="delete-icon"/></li>
            <li className={`todo-item ${darkTheme ? 'dark' : 'light'}`}><span className="check-icon"><img src={iconCheck} /></span>Jog around the park<img src={deleteIcon} alt="delete icon" className="delete-icon"/></li>
            <li className={`todo-item ${darkTheme ? 'dark' : 'light'}`}><span className="check-icon"><img src={iconCheck} /></span>Jog around the park<img src={deleteIcon} alt="delete icon" className="delete-icon"/></li>
            <li className={`todo-item ${darkTheme ? 'dark' : 'light'}`}><p>5 items left</p><button className="clear-btn">Clear Completed</button></li>
        </ul>
        <div className="filter">
            <ul className={`filter-list ${darkTheme ? 'dark' : 'light'}`}>
                <li className={`filter-item ${darkTheme ? 'dark' : 'light'}`}>All</li>
                <li className={`filter-item ${darkTheme ? 'dark' : 'light'}`}>Active</li>
                <li className={`filter-item ${darkTheme ? 'dark' : 'light'}`}>Completed</li>
            </ul>
        </div>
        <p className="drag-text">Drag and drop to reorder list</p>
        </section>
    );
}

export default TodoList;