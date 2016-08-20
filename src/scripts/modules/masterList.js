export default class MasterList {

  constructor() {
    this.activeLists = [];
    this.archivedLists = [];
  }

  addActiveList(list) {
    this.activeLists.push(list);
  }

  addArchivedList(list) {
    this.archivedLists.push(list);
  }

  deleteActiveList(name) {
    const newList = this.activeLists.filter((list) => {
      return !(list.name === name);
    });

    return newList; 
  }

  deleteArchivedList(name) {
    const newList = this.archivedLists.filter((list) => {
      return !(list.name === name);
    });

    return newList;
  }

  moveListToArchived(name) {
    let matchedList = this.activeLists.filter((list) => {
      return list.name === name;
    });

    matchedList = matchedList[0];
    this.addArchivedList(matchedList);
    this.activeLists = this.deleteActiveList(matchedList.name);
  }

}