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

  deleteList(targetList) {
    let match = [];
    if (targetList._active) {
      match = this.activeLists.filter((list) => {
        return !(list.name === listName);
      });
    } else {
      match = this.archivedLists.filter((list) => {
        return !(list.name === listName);
      });
    }

    return match;
  }

}