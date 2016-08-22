export default class List {

  constructor(name) {
    this.name = name;
    this.tasks = [];
    this._active = true;
  }

  setName(newName) {
    this.name = newName;
  }

  addTask(task) {
    this.tasks.push(task);
  }

  isActive() {
    return this._active;
  }

  toggleActive() {
    this._active = !this._active;
  }

  deleteTask(taskDescription) {
    let match = [];
    match = this.tasks.filter((task) => {
      return !(task.description === taskDescription);
    });

    return match;
  }

  filterTasks(priority) {
    let filtered = [];
    filtered = this.tasks.filter((task) => {
      return task.priority === priority; 
    });

    return filtered;
  } 
}





