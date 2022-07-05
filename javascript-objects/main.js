var student = {
  firstName: 'Scarlet',
  lastName: 'Kim',
  age: 29
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('Value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'tutor';
console.log('Value of student.livesInIrvine:', student.livesInIrvine);
console.log('Value of student.previousOccupation:', student.previousOccupation);
console.log('Value of student:', student);

var vehicle = {
  make: 'honda',
  model: 'accord',
  year: 2008
};

vehicle.color = 'white';
vehicle.isConvertible = false;
console.log("Value of vehicle['color']:", vehicle['color']);
console.log("Value of vehicle['isConvertible']:", vehicle['isConvertible']);
console.log('Value of vehicle:', vehicle);

var pet = {
  name: 'Momo',
  type: 'imaginary'
};

delete pet.name;
delete pet.type;
console.log('Value of pet:', pet);
