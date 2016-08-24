import Task from './Task';
import List from './List';
import MasterList from './Masterlist';
import ActiveList from './ActiveList';
import ArchivedList from './ArchivedList';
import User from './User.js';

export default class App {

  constructor() {
    this.activeList = new ActiveList();
    this.archivedList = new ArchivedList();
  }

}

const myApp = new App();




