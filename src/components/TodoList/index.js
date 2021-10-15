import './style.scss';

function TodoList({list, onEdit, onDelete}) {
  return(
    <div className="todo-list">
      <div className="title">Todo List</div>
      <div className="list">
        {list.length > 0 ? list.map((item, i) => {
          return(
            <div className="list-item" key={i}>
              <div className="item-title">{item.title}</div>
              <div className="item-actions">
                <button onClick={() => onEdit(item)}><img src="/assets/img/edit.svg" alt="Add"/></button>
                <button onClick={() => onDelete(item.id)}><img src="/assets/img/trash.svg" alt="Add"/></button>
              </div>
            </div>
          );
        }) : <span>No se encontraron resultados.</span>}
      </div>
    </div>
  );
}

export default TodoList;
