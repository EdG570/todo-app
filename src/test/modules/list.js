import { expect } from 'chai';
import List from '../../scripts/modules/List';

describe('List class', () => {
  let list, task, listWithTasks;

  beforeEach(() => {
    task = { description: 'Do homework', priority: 'High'};

    list = new List('Chores');

    listWithTasks = new List('Chores');

    listWithTasks.tasks = [
      { description: 'Buy lotion', priority: 'Low' },
      { description: 'Withdraw money from bank', priority: 'High' },
      { description: 'Buy swimsuit', priority: 'Medium' },
      { description: 'Go running', priority: 'Medium' },
      { description: 'Take the garbage out', priority: 'Low' }
    ];
  });

  it('should create a new List instance', () => { 
    expect(list).to.be.an.instanceOf(List);
    expect(list.name).to.equal('Chores');
    expect(list.tasks).to.eql([]);  
  });

  it('should update the list name', () => {  
    expect(list.name).to.equal('Chores');
    list.setName('Fun');
    expect(list.name).to.equal('Fun');   
  });

  it('should add a task to the list', () => { 
    expect(list.tasks).to.eql([]);
    list.addTask(task);
    expect(list.tasks).to.eql([{ description: 'Do homework', priority: 'High'}]);
  });

  it('should toggle active status', () => {
    expect(list._active).to.equal(true);
    list.toggleActive();
    expect(list._active).to.equal(false);
  });

  it('should delete a task from the tasks array', () => {
    expect(listWithTasks.tasks).to.have.lengthOf(5);
    listWithTasks.tasks = listWithTasks.deleteTask('Withdraw money from bank');
    expect(listWithTasks.tasks).to.have.lengthOf(4);
    expect(listWithTasks.tasks).to.eql([
      { description: 'Buy lotion', priority: 'Low' },
      { description: 'Buy swimsuit', priority: 'Medium' },
      { description: 'Go running', priority: 'Medium' },
      { description: 'Take the garbage out', priority: 'Low' }
    ]);
  });

  it('should return filtered tasks from list in an array', () => {
    let filteredTasks = [];
    
    expect(filteredTasks).to.have.lengthOf(0);
    filteredTasks = listWithTasks.filterTasks('Low');
    expect(filteredTasks).to.have.lengthOf(2);
    expect(filteredTasks).to.be.eql([
      { description: 'Buy lotion', priority: 'Low'},
      { description: 'Take the garbage out', priority: 'Low'}
    ]);

    filteredTasks = [];
    expect(filteredTasks).to.have.lengthOf(0);
    filteredTasks = listWithTasks.filterTasks('High');
    expect(filteredTasks).to.have.lengthOf(1);
    expect(filteredTasks).to.be.eql([{ description: 'Withdraw money from bank', priority: 'High' }]);
  
    filteredTasks = [];
    expect(filteredTasks).to.have.lengthOf(0);
    filteredTasks = listWithTasks.filterTasks('Medium');
    expect(filteredTasks).to.have.lengthOf(2);
    expect(filteredTasks).to.be.eql([
      { description: 'Buy swimsuit', priority: 'Medium' },
      { description: 'Go running', priority: 'Medium' }
    ]);
  });
});



