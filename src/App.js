import {useState} from "react";

import {getTodoList, setTodo, removeTodo, updateTodo} from "./services/TodoService";

import InsertForm from "./components/InsertForm";
import TodoList from "./components/TodoList";

import './App.scss';
import EditForm from "./components/EditForm";

function App() {
  const [title, setTitle] = useState('');
  const [todoList, setTodoList] = useState(getTodoList());
  const [showEdit, setShowEdit] = useState(false);
  const [currentItem, setCurrentItem] = useState({});

  const handleInsert = () => {
    if (title === '') return false;
    setTodo(title);
  };

  const handleDelete = id => {
    removeTodo(id);
    setTodoList(getTodoList());
  };

  const handleUpdate = params => {
    updateTodo(params.id, params.title);
    setTodoList(getTodoList());
    setShowEdit(false);
  };

  const openEditForm = item => {
    setCurrentItem(item);
    setShowEdit(true);
  };

  return (
    <div className="container">
      {showEdit &&
      <EditForm
        item={currentItem}
        onEdit={params => handleUpdate(params)}
        onClose={() => setShowEdit(false)}
      />
      }
      <div className="wrap">
        <InsertForm
          onChange={value => setTitle(value)}
          onClick={() => handleInsert()}
        />
        <TodoList
          list={todoList}
          onDelete={id => handleDelete(id)}
          onEdit={item => openEditForm(item)}
        />
      </div>
    </div>
  );
}

export default App;
