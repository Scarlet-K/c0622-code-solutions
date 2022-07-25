/* exported student */

var student = {
  firstName: 'Scarlet',
  lastName: 'Kim',
  subject: 'art',
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
  getIntroduction: function () {
    return 'Hello, my name is ' + this.getFullName() + ' and I am studying ' + this.subject + '.';
  }
};
