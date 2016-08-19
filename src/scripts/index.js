import List from './modules/list';
import Task from './modules/task';
import User from './modules/user';

const createUser = (firstName, lastName, email, password) => {
  return new User(firstName, lastName, email, password);
};

const createTask = (description, priority) => {
  return new Task(description, priority);
};

const createList = (name) => {
  return new List(name);
};

const addTask = (list, task) => {
  list.tasks.push(task);
};

const addList = (user, list) => {
  user.activeLists.push(list);
};

const deleteList = (user, listName, status) => {
  let match = [];
  if (status === 'active') {
    match = user.activeLists.filter((list) => {
      return !(list.name === listName);
    });
  }

  return match;
};

export { createUser, createTask, createList, addTask, addList, deleteList };

const me = createUser('Ed', 'Glazenski', 'cole570@hotmail.com', 'abc123');
const chores = createList('Chores');
const task1 = createTask('Cut grass', 'High');
const task2 = createTask('Wash clothes', 'Medium');
task1.toggleTaskStatus();
addTask(chores, task1);
addTask(chores, task2);
addList(me, chores);
console.log(me);







