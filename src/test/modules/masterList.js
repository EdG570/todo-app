import { expect } from 'chai';
import MasterList from '../../scripts/modules/MasterList';

describe.only('MasterList class', () => {
  // let master, master2, list;

  // beforeEach(() => {
  //   list = { name: 'Chores', tasks: [], _active: true };
    // master = new MasterList();
    // master2 = new MasterList();

    // const active = [
    //   { name: 'Chores', tasks: [], _active: true },
    //   { name: 'Vacation prep', tasks: [], _active: true },
    //   { name: 'Pay bills', tasks: [], _active: true }
    // ];

    // const archived = [
    //   { name: 'party', tasks: [], _active: true },
    //   { name: 'wedding', tasks: [], _active: true },
    //   { name: 'car', tasks: [], _active: true }
    // ];

    // master2.list = active;
  // });

  it('should throw an error on instance construction attempt', () => {
    expect(() => { new MasterList() }).to.throw('MasterList cannot be directly constructed.');
  });

  it('should add a list to the master list array', () => {
    expect(master.list).to.have.lengthOf(0);
    master.addList(list);
    expect(master.list).to.have.lengthOf(1);
    expect(master.list).to.eql([{name: 'Chores', tasks: [], _active: true}]);
  });

  it('should delete a list from the activeLists array', () => {
    expect(master2.list).to.have.lengthOf(3);
    master2.list = master2.deleteList(list, 'Chores');
    expect(master2.list).to.have.lengthOf(2);
    expect(master2.list).to.eql([ 
      { name: 'Vacation prep', tasks: [], _active: true },
      { name: 'Pay bills', tasks: [], _active: true } 
    ]);
  });

  it('should delete all lists from the array', () => {
    expect(master2.list).to.have.lengthOf(3);
    master2.clearLists();
    expect(master2.list).to.have.lengthOf(0);
  });

});