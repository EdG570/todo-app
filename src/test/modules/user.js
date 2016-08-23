import { expect } from 'chai';
import User from '../../scripts/modules/User';

describe('User class', () => {
  let user;

  beforeEach(() => {
    user = new User('John', 'Doe', 'JDoe@gmail.com', 'abc123');
  }); 

  it('should initialize a User instance', () => {
    expect(user).to.be.an.instanceOf(User);
    expect(user.firstName).to.equal('John');
    expect(user.lastName).to.equal('Doe');
    expect(user.email).to.equal('JDoe@gmail.com');
    expect(user.password).to.equal('abc123');
  });

  it('should return users full name', () => {
    expect(user.getFullName()).to.equal('John Doe');
  });

  it('should update users email', () => {
    expect(user.email).to.equal('JDoe@gmail.com');
    user.setEmail('Red@hotmail.com');
    expect(user.email).to.equal('Red@hotmail.com'); 
  });

  it('should update the users password', () => {
    expect(user.password).to.equal('abc123');
    user.setPassword('coolbeans!')
    expect(user.password).to.equal('coolbeans!');
  });
});
