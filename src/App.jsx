import './App.css'
import Header from './Header.jsx';
import TodoInput from './TodoInput.jsx';
import TodoList from './TodoList.jsx';
import { ThemeProvider } from './ThemeProvider';
function App() {

  return (
    <>
      <ThemeProvider>
      <Header />
      <TodoInput />
      <TodoList />
      </ThemeProvider>
    </>
  )
}

export default App
