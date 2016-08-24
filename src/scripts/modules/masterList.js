export default class MasterList {

  constructor(list) {
    if (new.target === MasterList) {
      throw new Error('MasterList cannot be directly constructed.');
    }
    this.lists = [];
  }

  addList(list) {
    this.lists.push(list);
  }

  deleteList(name) {
    const newList = this.lists.filter((listItem) => {
      return !(listItem.name === name);
    });

    return newList; 
  }

  clearLists() {
    this.lists = [];
  }

  static moveList(srcList, destList, targetListName) {
    let matchedList = srcList.lists.find((listItem) => {
      return listItem.name === targetListName;
    });

    destList.lists.push(matchedList);
  }
}