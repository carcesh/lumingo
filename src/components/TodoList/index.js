import './style.scss';

function TodoList({list, onDelete}) {
  return(
    <div className="todo-list">
      <div className="title">Todo List</div>
      <div className="list">
        {list.map((item, i) => {
          return(
            <div className="list-item" key={i}>
              <div className="item-title">{item.title}</div>
              <div className="item-actions">
                <button><img src="/assets/img/edit.svg" alt="Add"/></button>
                <button onClick={() => onDelete(item.id)}><img src="/assets/img/trash.svg" alt="Add"/></button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TodoList;
