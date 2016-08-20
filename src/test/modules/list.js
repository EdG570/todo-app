import { expect } from 'chai';
import List from '../../scripts/modules/list';

describe.only('List class', () => {
  let list;
  beforeEach(() => {
    list = new List('Chores');
  });

  it('should create a new List instance', () => { 
    expect(list.name).to.equal('Chores');
    expect(list.tasks).to.eql([]);  
  });

  it('should update the list name', () => {  
    expect(list.name).to.equal('Chores');

    list.setName('Fun');
    expect(list.name).to.equal('Fun');   
  });

  it('should add a task to the list', () => {
    const task = { description: 'Do homework', priority: 'High'};
    expect(list.tasks).to.eql([]);
    list.addTask(task);
    expect(list.tasks).to.eql([{ description: 'Do homework', priority: 'High'}]);
  });

  it('should remove a task from the tasks array', () => {
    list.tasks.push({ description: 'Buy lotion', priority: 'Low'});
    list.tasks.push({ description: 'Withdraw money from bank', priority: 'High'});
    list.tasks.push({ description: 'Buy swimsuit', priority: 'Medium'});

    expect(list.tasks).to.have.lengthOf(3);
    list.tasks = list.deleteTask('Withdraw money from bank');

    expect(list.tasks).to.have.lengthOf(2);
    expect(list.tasks).to.eql([
        { description: 'Buy lotion', priority: 'Low'},
        { description: 'Buy swimsuit', priority: 'Medium'}
      ]);
  });
});



