export default class Task {

  constructor(description, priority) {
    this.description = description;
    this.priority = priority;
    this.isComplete = false;
  }

  setDescription(newDescription) {
    this.description = newDescription;
  }

  setPriority(newPriority) {
    this.priority = newPriority;
  }

  getDescription() {
    return this.description;
  }

  getPriority() {
    return this.priority;
  }

  toggleTaskStatus() {
    this.isComplete = !this.isComplete;
  }
}