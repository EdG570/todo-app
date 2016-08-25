export default class MasterList {

  constructor() {
    this.lists = [];
  }

  addList(list) {
    this.lists.push(list);
  }

  deleteList(name) {
    const newList = this.lists.filter((listItem) => {
      return !(listItem.name === name);
    });

    this.lists = newList; 
  }

  clearLists() {
    this.lists = [];
  }

  // moveList(srcList, destList, targetListName) {
  //   let matchedList = srcList.lists.find((listItem) => {
  //     return listItem.name === targetListName;
  //   });

  //   destList.lists.push(matchedList);
  // }
}