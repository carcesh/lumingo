import {useState} from "react";

import {getTodoList, setTodo, removeTodo, updateTodo, filterTodo} from "./services/TodoService";

import InsertForm from "./components/InsertForm";
import EditForm from "./components/EditForm";
import SearchForm from "./components/SearchForm";
import TodoList from "./components/TodoList";

import './App.scss';

function App() {
  const [title, setTitle] = useState('');
  const [todoList, setTodoList] = useState(getTodoList());
  const [showEdit, setShowEdit] = useState(false);
  const [currentItem, setCurrentItem] = useState({});
  const [query, setQuery] = useState('');

  const handleInsert = () => {
    if (title === '') return false;
    setTodo(title);
  };

  const handleDelete = id => {
    removeTodo(id);
    setTodoList(getTodoList());
  };

  const handleUpdate = params => {
    if (!params.title) return false;

    updateTodo(params.id, params.title);
    setTodoList(getTodoList());
    setShowEdit(false);
  };

  const handleSearch = () => {
    setTodoList(filterTodo(query));
  }

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
        <SearchForm
          onChange={value => setQuery(value)}
          onClick={() => handleSearch()}
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
