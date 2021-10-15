import {useState} from "react";

import {getTodoList, setTodo} from "./services/TodoService";

import InsertForm from "./components/InsertForm";
import TodoList from "./components/TodoList";

import './App.scss';

function App() {
  const [title, setTitle] = useState('');
  const todoList = getTodoList();

  const handleClick = () => {
    setTodo(title);
  };

  return (
    <div className="container">
      <div className="wrap">
        <InsertForm onChange={value => setTitle(value)} onClick={() => handleClick()}/>
        <TodoList list={todoList}/>
      </div>
    </div>
  );
}

export default App;
