import './todoList.css';
import deleteIcon from './assets/icon-cross.svg';
import iconCheck from './assets/icon-check.svg';
function TodoList(){
    return(
        <section className="todos">
        <ul className="todo-list">
            <li className="todo-item"><span className="check-icon"><img src={iconCheck} /></span>Jog around the park<img src={deleteIcon} alt="delete icon" className="delete-icon"/></li>
            <li className="todo-item"><span className="check-icon"><img src={iconCheck} /></span>Jog around the park<img src={deleteIcon} alt="delete icon" className="delete-icon"/></li>
            <li className="todo-item"><span className="check-icon"><img src={iconCheck} /></span>Jog around the park<img src={deleteIcon} alt="delete icon" className="delete-icon"/></li>
            <li className="todo-item"><p>5 items left</p><button className="clear-btn">Clear Completed</button></li>
        </ul>
        <div className="filter">
            <ul className="filter-list">
                <li className="filter-item">All</li>
                <li className="filter-item">Active</li>
                <li className="filter-item">Completed</li>
            </ul>
        </div>
        <p className="drag-text">Drag and drop to reorder list</p>
        </section>
    );
}

export default TodoList;