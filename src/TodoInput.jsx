import './todoInput.css';
import iconCheck from './assets/icon-check.svg'

function TodoInput(){
    return(
        <div className="todoInput-container">
            
            <input type="text" className="todo-input" placeholder="Create a new todo..." />
            <span className="check-icon"><img src={iconCheck} /></span>
        </div>
    );
}

export default TodoInput;