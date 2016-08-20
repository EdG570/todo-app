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
    const matchedList = this.activeLists.filter((list) => {
      return list.name === name;
    });

    this.addArchivedList(matchedList);
    this.activeLists = this.deleteActiveList(matchedList.name);
    console.log(this.activeLists);
  }

}