export default class List {

  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  getName() {
    return this.name;
  }

  setName(newName) {
    this.name = newName;
  }
}





