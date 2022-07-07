/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  var fullName = person.name + ' is a ';
  var description = person.occupation + ' from ' + person.birthPlace;
  return fullName + description + '.';
}
