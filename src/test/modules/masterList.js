import { expect } from 'chai';
import MasterList from '../../scripts/modules/masterList';

describe.only('MasterList class', () => {
  let master, master2, list;

  beforeEach(() => {
    list = { name: 'Chores', tasks: [], _active: true };
    master = new MasterList();
    master2 = new MasterList();

    const active = [
      { name: 'Chores', tasks: [], _active: true },
      { name: 'Vacation prep', tasks: [], _active: true },
      { name: 'Pay bills', tasks: [], _active: true }
    ];

    const archived = [
      { name: 'party', tasks: [], _active: true },
      { name: 'wedding', tasks: [], _active: true },
      { name: 'car', tasks: [], _active: true }
    ];

    master2.activeLists = active;
    master2.archivedLists = archived;
  });

  it('should construct a new instance of MasterList', () => {
    expect(master.activeLists).to.exist;
    expect(master.archivedLists).to.exist;
  });

  it('should add a list to the activeLists array', () => {
    expect(master.activeLists).to.have.lengthOf(0);
    master.addActiveList(list);
    expect(master.activeLists).to.have.lengthOf(1);
    expect(master.activeLists).to.eql([{name: 'Chores', tasks: [], _active: true}]);
  });

  it('should add a list to the archivedList array', () => {
    expect(master.archivedLists).to.have.lengthOf(0);
    master.addArchivedList(list);
    expect(master.archivedLists).to.have.lengthOf(1);
    expect(master.archivedLists).to.eql([{name: 'Chores', tasks: [], _active: true}]);
  });

  it('should delete a list from the activeLists array', () => {
    expect(master2.activeLists).to.have.lengthOf(3);
    master2.activeLists = master2.deleteActiveList('Chores');
    expect(master2.activeLists).to.have.lengthOf(2);
    expect(master2.activeLists).to.eql([ 
      { name: 'Vacation prep', tasks: [], _active: true },
      { name: 'Pay bills', tasks: [], _active: true } 
    ]);
  });

  it('should delete a list from the archivedLists array', () => {
    expect(master2.archivedLists).to.have.lengthOf(3);
    master2.archivedLists = master2.deleteArchivedList('wedding');
    expect(master2.archivedLists).to.have.lengthOf(2);
    expect(master2.archivedLists).to.eql([ 
      { name: 'party', tasks: [], _active: true },
      { name: 'car', tasks: [], _active: true } 
    ]);
  });

  it('should move a list from activeLists to archivedLists', () => {
    master.activeLists.push(list);
    expect(master.activeLists).to.have.lengthOf(1);
    expect(master.archivedLists).to.have.lengthOf(0);
    expect(master.activeLists[0].name).to.equal('Chores');

    master.moveListToArchived('Chores');
    expect(master.activeLists).to.have.lengthOf(0);
    expect(master.archivedLists).to.have.lengthOf(1);
    expect(master.archivedLists[0].name).to.equal('Chores');
  });

  it('should delete all lists from the activeLists array', () => {
    expect(master2.activeLists).to.have.lengthOf(3);
    master2.clearActiveLists();
    expect(master2.activeLists).to.have.lengthOf(0);
  });

  it('should delete all lists from the archivedLists array', () => {
    expect(master2.archivedLists).to.have.lengthOf(3);
    master2.clearArchivedLists();
    expect(master2.archivedLists).to.have.lengthOf(0);
  });

});