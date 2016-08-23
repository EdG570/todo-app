export default class MasterList {

  constructor(list) {
    if (new.target === MasterList) {
      throw new Error('MasterList cannot be directly constructed.');
    }
    this.lists = [];
  }

  addList(list) {
    this.list.push(list);
  }

  deleteList(name) {
    const newList = this.lists.filter((listItem) => {
      return !(listItem.name === name);
    });

    return newList; 
  }

  clearLists() {
    this.list = [];
  }

  static moveList(srcList, destList, targetListName) {
    let matchedList = srcList.lists.filter((listItem) => {
      return listItem.name === targetListName;
    });

    matchedList = matchedList[0];
    destList.lists.push(matchedList);
    srcList.lists = srcList.deleteList(targetListName);
  }
}