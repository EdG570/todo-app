export default class User {

  constructor(firstName, lastName, email, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.activeLists = [];
    this.archivedLists = [];
  }

  getFullName() {
    return `${ this.firstName } ${ this.lastName}`;
  }

  getFirstName() {
    return `${ this.firstName }`;
  }

  setEmail(newEmail) {
    this.email = newEmail;
  }
}