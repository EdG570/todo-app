import { expect } from 'chai';
import Task from '../../scripts/modules/Task';

describe('Task class', () => {
  let task;

  beforeEach(() => {
    task = new Task('Wash clothes', 'High');
  });

  describe('constructor()', () => {
    it('should create a new Task instance', () => { 
      expect(task).to.be.an.instanceOf(Task);
      expect(task.description).to.equal('Wash clothes');
      expect(task.priority).to.equal('High');
    });
  });

  describe('setDescription()', () => {
    it('should change current description to new description', () => {
      expect(task.description).to.equal('Wash clothes');
      task.setDescription('Cut grass');
      expect(task.description).to.eql('Cut grass');
    });
  });

  describe('setPriority()', () => {
    it('should change current priority to new priority', () => {
      expect(task.priority).to.equal('High');
      task.setPriority('Low');
      expect(task.priority).to.eql('Low');
    });
  });

  describe('toggleTaskStatus()', () => {
    it('should toggle isComplete task status', () => {
      expect(task.isComplete()).to.equal(false);
      task.toggleTaskStatus();
      expect(task.isComplete()).to.eql(true);
      task.toggleTaskStatus();
      expect(task.isComplete()).to.eql(false);
    });
  });
});