const _ = require('lodash');
const { v4: uuidv4 } = require('uuid');

let todoList = [
  {
    id: uuidv4(),
    title: 'Pug JS - Inducción Extends Block'
  },
  {
    id: uuidv4(),
    title: 'Stylus JS'
  },
  {
    id: uuidv4(),
    title: 'React JS - Inducción Props y States'
  },
  {
    id: uuidv4(),
    title: 'Vue JS - Inducción LifeCycle'
  },
];

exports.getTodoList = () => {
  return todoList;
}

exports.setTodo = title => {
  todoList.push({
    id: uuidv4(),
    title
  });
}

exports.removeTodo = id => {
  todoList = _.reject(todoList, ['id', id]);
}
