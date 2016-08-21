export default class User {

  constructor(firstName, lastName, email, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }

  getFullName() {
    return `${ this.firstName } ${ this.lastName}`;
  }

  setEmail(newEmail) {
    this.email = newEmail;
  }

  setPassword(newPw) {
    this.password = newPw;
  }

}