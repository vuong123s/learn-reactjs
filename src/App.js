import logo from './logo.svg';
import './App.css';
import TodoList from "./features/Todo/index.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoList></TodoList>
      </header>
    </div>
  );
}

export default App;
