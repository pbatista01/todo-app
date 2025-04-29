import './App.css'
import Header from './Header.jsx';
import TodoInput from './TodoInput.jsx';
import TodoList from './TodoList.jsx';
import { ThemeProvider } from './ThemeProvider';
import { useState } from 'react';

function App() {

    const [todos, setTodos] = useState([]);

    const [filter, setFilter] = useState('all');

    const addTodo = (text) => {
      const newTodo = {
        id: Date.now(),
        text,
        completed: false
      };
      setTodos (prev => [...prev, newTodo]);
    }

    const handleFilterChange  = (newFilter) => {
        setFilter(newFilter);
    }

    const filteredTodos = todos.filter(todo =>{
        if(filter === "active") return !todo.completed;
        if(filter === "completed") return todo.completed;
        return true;
    })

    const toggleTodo = (id) => {
        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed} : todo
            )
        );
    };

    const removeTodo = (id) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
    }

    const clearCompleted = () =>{
        setTodos(prevTodos => prevTodos.filter(todo => !todo.completed));
    }

  return (
    <ThemeProvider>
      <Header />
      <TodoInput addTodo={addTodo}/>
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} clearCompleted={clearCompleted} filteredTodos={filteredTodos} handleFilterChange={handleFilterChange}/>
    </ThemeProvider>
  )
}

export default App
