import './todoList.css';
import deleteIcon from './assets/icon-cross.svg';
import iconCheck from './assets/icon-check.svg';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function TodoList({todos, clearCompleted, toggleTodo, removeTodo, filteredTodos, handleFilterChange}){

    const {darkTheme} = useContext(ThemeContext);


    return(
        <section className="todos">
        <ul className={`todo-list ${darkTheme ? 'dark' : 'light'}`}>
            {filteredTodos.map(todo =>(
                <li className={`todo-item ${darkTheme ? 'dark' : 'light'} ${todo.completed ? 'completed' : ''} `} key={todo.id} onClick={()=> toggleTodo(todo.id)}><span className="check-icon"><img src={iconCheck} /></span>{todo.text}<img src={deleteIcon} onClick={() => removeTodo(todo.id)} alt="delete icon" className="delete-icon"/></li>
            ))}
            <li className={`todo-item ${darkTheme ? 'dark' : 'light'}`}><p>{todos.filter(todo => !todo.completed).length} items left</p><button className="clear-btn" onClick={clearCompleted}>Clear Completed</button></li>
        </ul>
        <div className="filter">
            <ul className={`filter-list ${darkTheme ? 'dark' : 'light'}`}>
                <li className={`filter-item ${darkTheme ? 'dark' : 'light'}`} onClick={()=> handleFilterChange('all')}>All</li>
                <li className={`filter-item ${darkTheme ? 'dark' : 'light'}`} onClick={()=> handleFilterChange('active')}>Active</li>
                <li className={`filter-item ${darkTheme ? 'dark' : 'light'}`} onClick={() => handleFilterChange('completed')}>Completed</li>
            </ul>
        </div>
        <p className="drag-text">Drag and drop to reorder list</p>
        </section>
    );
}

export default TodoList;