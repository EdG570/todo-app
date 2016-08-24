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

  describe('constructor()', () => {
    it('should create a new List instance', () => { 
      expect(list).to.be.an.instanceOf(List); 
    });
  });

  describe('setName()', () => {
    it('should update the list name', () => {  
      expect(list.name).to.equal('Chores');
      list.setName('Fun');
      expect(list.name).to.equal('Fun');   
    });
  });

  describe('addTask()', () => {
    it('should add a task to the list instance tasks array', () => { 
      expect(list.tasks).to.eql([]);
      list.addTask(task);
      expect(list.tasks).to.eql([{ description: 'Do homework', priority: 'High'}]);
    });
  });

  describe('toggleActive()', () => {
    it('should toggle active status property', () => {
      expect(list._active).to.equal(true);
      list.toggleActive();
      expect(list._active).to.equal(false);
    });
  });

  describe('deleteTask()', () => {
    it('should delete a specified task from the tasks array', () => {
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
  });

  describe('filterTasks()', () => {
    it('should return filtered tasks from list in an array', () => {
      let filteredTasks = [];
      
      expect(filteredTasks).to.have.lengthOf(0);
      filteredTasks = listWithTasks.filterTasks('Low');
      expect(filteredTasks).to.have.lengthOf(2);
      expect(filteredTasks).to.be.eql([
        { description: 'Buy lotion', priority: 'Low'},
        { description: 'Take the garbage out', priority: 'Low'}
      ]);
    });
  });
});



