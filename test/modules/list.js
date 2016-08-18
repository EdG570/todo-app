import { expect } from 'chai';
import List from '../../src/scripts/modules/list';

describe('List class', () => {
  let list = new List('Chores');

  it('should create a new List instance', () => { 
    expect(list).to.be.a('object');
    expect(list).to.not.be.empty;
    expect(list.name).to.not.be.empty;
    expect(list.name).to.be.a('string');
    expect(list.name).to.equal('Chores');
    expect(list.tasks).to.be.a('array');
    expect(list.tasks.length).to.be.equal(0);
    expect(list).to.eql({ name: 'Chores', tasks: [] });   
  });

  it('should return list name', () => {  
    expect(list.getName()).to.not.be.empty;
    expect(list.getName()).to.be.a('string');
    expect(list.getName()).to.eql('Chores');   
  });

  it('should update list name', () => {  
    let list = new List('Chores');
    expect(list.name).to.equal('Chores');

    list.setName('Fun');
    expect(list.name).to.not.be.empty;
    expect(list.name).to.be.a('string');
    expect(list.name).to.equal('Fun');   
  });
});



