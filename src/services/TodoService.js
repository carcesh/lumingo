const todoList = [
  {
    title: 'Pug JS - Inducción Extends Block'
  },
  {
    title: 'Stylus JS'
  },
  {
    title: 'React JS - Inducción Props y States'
  },
  {
    title: 'Vue JS - Inducción LifeCycle'
  },
];

exports.getTodoList = () => {
  return todoList;
}

exports.setTodo = title => {
  todoList.push({title});
}
