import './todoInput.css';
import iconCheck from './assets/icon-check.svg'
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { useState } from 'react';

function TodoInput({addTodo}){

    const {darkTheme} = useContext(ThemeContext);

    const [input, setInput] = useState('');

    const handleKeyDown = (e) =>{
        if(e.key === 'Enter' && input.trim()){
            addTodo(input);
            setInput('');
        }
    };

    return(
        <div className="todoInput-container">
            <input type="text" className={`todo-input ${darkTheme ? 'dark' : 'light'}`} placeholder="Create a new todo..." value={input} onChange={(e)=> setInput(e.target.value)} onKeyDown={handleKeyDown}/>
            <span className="check-icon"><img src={iconCheck} /></span>
        </div>
    );
}

export default TodoInput;