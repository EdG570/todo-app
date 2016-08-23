import { expect } from 'chai';
import MasterList from '../../scripts/modules/MasterList';
import MasterListMock from '../../scripts/modules/mocks/masterListMock';

describe('MasterList class', () => {
  let activeList, archivedList, master, list;

  beforeEach(() => {
    activeList = MasterListMock.activeList;
    activeList.lists = [
      { name: 'Chores', tasks: [], _active: true },
      { name: 'Vacation prep', tasks: [], _active: true },
      { name: 'Pay bills', tasks: [], _active: true }
    ];
    
    archivedList = MasterListMock.archivedList;
    archivedList.lists = [
      { name: 'party', tasks: [], _active: true },
      { name: 'wedding', tasks: [], _active: true },
      { name: 'car', tasks: [], _active: true }
    ];

    master = MasterListMock.MasterList;
    master.lists = [];

    list = { name: 'Chores', tasks: [], _active: true };
  });

  it('should throw an error on instance construction attempt', () => {
    expect(() => { new MasterList() }).to.throw('MasterList cannot be directly constructed.');
  });

  it('should add a list to the master list array', () => {
    expect(master.lists).to.have.lengthOf(0);
    master.addList(list);
    expect(master.lists).to.have.lengthOf(1);
    expect(master.lists).to.eql([{name: 'Chores', tasks: [], _active: true}]);
  });

  it('should delete a list from the lists array', () => {
    activeList.lists.forEach((list) => {
      master.lists.push(list);
    });
    expect(master.lists).to.have.lengthOf(3);
    master.lists = master.deleteList('Chores');
    expect(master.lists).to.have.lengthOf(2);
    expect(master.lists).to.eql([
      { name: 'Vacation prep', tasks: [], _active: true },
      { name: 'Pay bills', tasks: [], _active: true }
    ]);
  });

  it('should delete all lists from the array', () => {
    activeList.lists.forEach((list) => {
      master.lists.push(list);
    });
    expect(master.lists).to.have.lengthOf(3);
    master.clearLists();
    expect(master.lists).to.have.lengthOf(0);
  });

  it('should move a list from a child list array to a different child array', () => {
    expect(activeList.lists).to.have.lengthOf(3);
    expect(archivedList.lists).to.have.lengthOf(3);
    MasterList.moveList(activeList, archivedList, 'Chores');
    expect(activeList.lists).to.have.lengthOf(2);
    expect(archivedList.lists).to.have.lengthOf(4);
    expect()
  });

});