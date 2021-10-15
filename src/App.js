import InsertForm from "./components/InsertForm";
import TodoList from "./components/TodoList";

import './App.scss';
import {getTodoList} from "./services/TodoService";

function App() {
  return(
    <div className="container">
      <div className="wrap">
        <InsertForm/>
        <TodoList list={getTodoList()}/>
      </div>
    </div>
  );
}

export default App;
