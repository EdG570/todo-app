import Task from './Task';
import List from './List';
import MasterList from './Masterlist';
import User from './User.js';

export default class App {

  constructor() {
    this.MasterList = new MasterList();
  }

  createUser(firstName, lastName, email, password) {
    return new User(firstName, lastName, email, password);
  }

  createList(name) {
    return new List(name);
  }

  createTask(description, priority) {
    return new Task(description, priority);
  }

}