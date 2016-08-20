export default class User {

  constructor(firstName, lastName, email, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this._password = password;
  }

  getFullName() {
    return `${ this.firstName } ${ this.lastName}`;
  }

  setEmail(newEmail) {
    this.email = newEmail;
  }

  createUser(firstName, lastName, email, password) {
    return new User(firstName, lastName, email, password);
  };
}