import { expect } from 'chai';
import Task from '../../scripts/modules/task';

describe('Task class', () => {
  let task = new Task('Wash clothes', 'High');

  it('should create a new Task instance', () => {
    expect(task).to.eql({ description: 'Wash clothes', priority: 'High', isComplete: false });   
    expect(task).to.be.a('object');
    expect(task).to.have.property('description');
    expect(task).to.have.property('priority');
    expect(task.description).to.be.a('string');
    expect(task.description).to.equal('Wash clothes');
    expect(task.description).to.not.be.empty;
    expect(task.isComplete).to.be.a('boolean');
    expect(task.isComplete).to.equal(false);
    expect(task.isComplete).to.exist;
    expect(task.priority).to.be.a('string');
    expect(task.priority).to.equal('High');
    expect(task.priority).to.not.be.empty;
  });

  it('should change current description to new description', () => {
    let task = new Task('Wash clothes', 'High');
    expect(task.description).to.equal('Wash clothes');

    task.setDescription('Cut grass');
    expect(task.description).to.eql('Cut grass');
    expect(task.description).to.not.be.empty;
    expect(task.description).to.be.a('string');
  });

  it('should change current priority to new priority', () => {
    let task = new Task('Wash clothes', 'High');
    expect(task.priority).to.equal('High');

    task.setPriority('Low');
    expect(task.priority).to.eql('Low');
    expect(task.priority).to.not.be.empty;
    expect(task.priority).to.be.a('string');
  });

  it('should return task description', () => {
    expect(task.getDescription()).to.eql('Wash clothes');
    expect(task.getDescription()).to.not.be.empty;
    expect(task.getDescription()).to.be.a('string');
  });

  it('should return task priority', () => {
    expect(task.getPriority()).to.eql('High');
    expect(task.getPriority()).to.not.be.empty;
    expect(task.getPriority()).to.be.a('string');
  });

  it('should toggle isComplete task status', () => {
    let task = new Task('Study', 'Medium');
    expect(task.isComplete).to.equal(false);
    expect(task.isComplete).to.be.a('boolean');

    task.toggleTaskStatus()
    expect(task.isComplete).to.eql(true);

    task.toggleTaskStatus()
    expect(task.isComplete).to.eql(false);
  });
})