import List from './modules/list';
import Task from './modules/task';
import User from './modules/user';

const createNewUser = (firstName, lastName, email, password) => {
  return new User(firstName, lastName, email, password);
};

const createNewTask = (description, priority) => {
  return new Task(description, priority);
};

const createNewList = (name) => {
  return new List(name);
};

const addTaskToList = (list, task) => {
  list.tasks.push(task);
};

const addListToUser = (user, list) => {
  user.activeLists.push(list);
};

const deleteList = (user, listName, status) => {
  if (status === 'active') {
    
  }

}

// const toggleTaskStatus = (task) => {
//   task.isComplete = !task.isComplete;
// }

const me = createNewUser('Ed', 'Glazenski', 'cole570@hotmail.com', 'abc123');
const chores = createNewList('Chores');
const task1 = createNewTask('Cut grass', 'High');
const task2 = createNewTask('Wash clothes', 'Medium');
task1.toggleTaskStatus();
addTaskToList(chores, task1);
addTaskToList(chores, task2);
addListToUser(me, chores);
console.log(me);







