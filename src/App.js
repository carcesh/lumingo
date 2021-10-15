import {useState} from "react";

import {getTodoList, setTodo, removeTodo} from "./services/TodoService";

import InsertForm from "./components/InsertForm";
import TodoList from "./components/TodoList";

import './App.scss';

function App() {
  const [title, setTitle] = useState('');
  const [todoList, setTodoList] = useState(getTodoList());

  const handleInsert = () => {
    if (title === '') return false;
    setTodo(title);
  };

  const handleDelete = id => {
    removeTodo(id);
    setTodoList(getTodoList());
  };

  return (
    <div className="container">
      <div className="wrap">
        <InsertForm onChange={value => setTitle(value)} onClick={() => handleInsert()}/>
        <TodoList list={todoList} onDelete={id => handleDelete(id)}/>
      </div>
    </div>
  );
}

export default App;
