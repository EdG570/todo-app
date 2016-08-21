import Task from './task';
import List from './list';
import MasterList from './masterlist';
import User from './user.js';

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