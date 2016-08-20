import { expect } from 'chai';
import MasterList from '../../scripts/modules/masterList';

describe.only('MasterList class', () => {
  let master = {};

  const list = { name: 'Chores', tasks: [], _active: true };
  const list2 = { name: 'Vacation prep', tasks: [], _active: true };
  const list3 = { name: 'Pay bills', tasks: [], _active: true };

  beforeEach(() => {
    master = new MasterList();
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
    master.activeLists.push(list);
    master.activeLists.push(list2);
    master.activeLists.push(list3);

    expect(master.activeLists).to.have.lengthOf(3);

    master.activeLists = master.deleteActiveList('Chores');
    expect(master.activeLists).to.have.lengthOf(2);
    expect(master.activeLists).to.eql([ { name: 'Vacation prep', tasks: [], _active: true },
                                        { name: 'Pay bills', tasks: [], _active: true } ]);
  });


  it('should delete a list from the archivedLists array', () => {
    master.archivedLists.push(list);
    master.archivedLists.push(list2);
    master.archivedLists.push(list3);

    expect(master.archivedLists).to.have.lengthOf(3);

    master.archivedLists = master.deleteArchivedList('Chores');
    expect(master.archivedLists).to.have.lengthOf(2);
    expect(master.archivedLists).to.eql([ { name: 'Vacation prep', tasks: [], _active: true },
                                        { name: 'Pay bills', tasks: [], _active: true } ]);
  });

  it('should move a list from activeLists to archivedLists', () => {
    master.activeLists.push(list);
    expect(master.activeLists).to.have.lengthOf(1);
    expect(master.archivedLists).to.have.lengthOf(0);
    expect(master.activeLists[0].name).to.equal('Chores');

    master.moveListToArchived('Chores');
    expect(master.archivedLists).to.have.lengthOf(1);
    expect(master.archivedLists[0].name).to.equal('Chores');
  });

});