export default class MasterList {

  constructor(list) {
    if (new.target === MasterList) {
      throw new Error('MasterList cannot be directly constructed.');
    }
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