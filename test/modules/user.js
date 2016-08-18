import { expect } from 'chai';
import User from '../../src/scripts/modules/user';

describe('User class', () => {
  let user = new User('John', 'Doe', 'JDoe@gmail.com', 'abc123');

  it('should initialize a User instance', () => {
    expect(user).to.be.a('object');
    expect(user).to.eql({firstName: 'John', lastName: 'Doe', email: 'JDoe@gmail.com', password: 'abc123', activeLists: [], archivedLists: []});
  });

  it('should contain a string value for the first name key', () => {
    expect(user.firstName).to.not.be.empty;
    expect(user.firstName).to.be.a('string');
    expect(user.firstName).to.equal('John');
  });

  it('should contain a string value for the last name key', () => {
    expect(user.lastName).to.not.be.empty;
    expect(user.lastName).to.be.a('string');
    expect(user.lastName).to.equal('Doe');
  });

  it('should contain an email value', () => {
    expect(user.email).to.not.be.empty;
    expect(user.email).to.be.a('string');
    expect(user.email).to.equal('JDoe@gmail.com');
  });

  it('should contain a password value', () => {
    expect(user.password).to.not.be.empty;
    expect(user.password).to.be.a('string');
    expect(user.password).to.equal('abc123');
  });

  it('should contain an empty active lists array', () => {
    expect(user.activeLists).to.have.lengthOf(0);
    expect(user.activeLists).to.be.a('array');
    expect(user.activeLists).to.eql([]);
  });

  it('should contain an empty archived lists array', () => {
    expect(user.archivedLists).to.have.lengthOf(0);
    expect(user.archivedLists).to.be.a('array');
    expect(user.archivedLists).to.eql([]);
  });

  it('should return users full name', () => {
    expect(user.getFullName()).to.be.a('string');
    expect(user.getFullName()).to.not.be.empty;
    expect(user.getFullName()).to.equal('John Doe');
  });

  it('should return users first name', () => {
    expect(user.getFirstName()).to.be.a('string');
    expect(user.getFirstName()).to.not.be.empty;
    expect(user.getFirstName()).to.equal('John');
  });

  it('should update users email', () => {
    expect(user.email).to.equal('JDoe@gmail.com');

    user.setEmail('JDoe@hotmail.com');
    expect(user.email).to.equal('JDoe@hotmail.com'); 
  });
});
