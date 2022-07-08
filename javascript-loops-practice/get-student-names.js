/* exported getStudentNames */

// store the student names inside an array
// access the student names property at each index by using a dot notation

function getStudentNames(students) {
  var studentNames = [];
  for (var i = 0; i < students.length; i++) {
    studentNames.push(students[i].name);
  }
  return studentNames;
}
