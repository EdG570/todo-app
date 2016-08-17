import { expect } from 'chai';
import Person from '../../src/scripts/modules/hello';

describe('Person', () => {
  it('should return the name', () => {
    let person = new Person('Ed');
    expect(person.getName()).to.be.equal("Ed");

    let person1 = new Person('Santiago');
    expect(person1.getName()).to.be.equal("Santiago");
  });
})



