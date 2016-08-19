import { expect } from 'chai';
import { createUser, createTask, createList, addTask, addList, deleteList } from '../../scripts/index';

describe('Main app', () => {
  let user = {};
  beforeEach(() => {
    user = {
        firstName: 'John', 
        lastName: 'Doe', 
        email: 'JDoe@gmail.com', 
        password: 'abc123', 
        activeLists: [
            { name: 'Bills', tasks: [] }, 
            { name: 'Chores', tasks: [] },
            { name: 'Vacation prep', tasks: [] }
        ], 
        archivedLists: []
    };
  });

  it('should create a new task instance', () => {
    expect(createTask('sleep', 'High')).to.eql({description: 'sleep', priority: 'High', isComplete: false});
  });

  it('should create a new list', () => {
    expect(createList('Chores')).to.eql({name: 'Chores', tasks: []});
  });

  it('should delete a specified list from activeLists array', () => {
    let listName = 'Chores';
    let status = 'active';

    user.activeLists = deleteList(user, listName, status);

    expect(user.activeLists).to.eql([{ name: 'Bills', tasks: [] }, { name: 'Vacation prep', tasks: [] }]);

  });

  it('should add a task to a specified list', () => {
    const list = { name: 'Bills', tasks: [] };
    const task = { description: 'Cut grass', priority: 'High'};

    expect(list.tasks).to.have.lengthOf(0);
    
    addTask(list, task);
    expect(list.tasks).to.have.lengthOf(1);
    expect(list.tasks).to.include({ description: 'Cut grass', priority: 'High'});
  });

  it('should add a newly created list to the users active lists array', () => {
    const list = { name: 'Party', tasks: [] };

    expect(user.activeLists).to.have.lengthOf(3);
    
    addList(user, list);
    expect(user.activeLists).to.have.lengthOf(4);
    expect(user.activeLists).to.include({ name: 'Party', tasks: [] });
  });

  it('should create a new user account', () => {
    const firstName = 'John';
    const lastName = 'Doe';
    let email = 'JDoe@gmail.com';
    let password = 'abc123';

    const user = createUser(firstName, lastName, email, password);

    expect(user).to.be.a('object');
    expect(user.firstName).to.equal('John');
    expect(user.lastName).to.equal('Doe');
    expect(user.email).to.equal('JDoe@gmail.com');
    expect(user.password).to.equal('abc123');
  });
});




