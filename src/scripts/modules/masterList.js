export default class MasterList {

  constructor(list) {
    this.list = [];
  }

  addList(list) {
    this.list.push(list);
  }

  deleteList(list, name) {
    const newList = this.list.filter((listItem) => {
      return !(listItem.name === name);
    });

    return newList; 
  }

  clearLists() {
    this.list = [];
  }

  // moveList() ??? or in App?
}