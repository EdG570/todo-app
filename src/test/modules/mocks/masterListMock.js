export default {

  MasterList: {
    lists: [],

    deleteList(list, name) {
      const newList = this.lists.filter((listItem) => {
        return !(listItem.name === name);
      });

      return newList; 
    },

    addList(list) {
      this.lists.push(list);
    },

    deleteList(name) {
      const newList = this.lists.filter((listItem) => {
        return !(listItem.name === name);
      });

      return newList; 
    },

    clearLists() {
      this.lists = [];
    }
  },

  activeList: {
    lists: [],

    deleteList(name) {
      const newList = this.lists.filter((listItem) => {
        return !(listItem.name === name);
      });

      return newList; 
    },
  },

  archivedList: {
    lists: []
  }
  
}