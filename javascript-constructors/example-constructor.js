function ExampleConstructor() {}
console.log(ExampleConstructor);
console.log('value of ExampleConstuctor.prototype:', ExampleConstructor.prototype);
console.log('type of ExampleConstructor.prototype:', typeof ExampleConstructor.prototype);

var newObject = new ExampleConstructor();
console.log('value of newObject:', newObject);
var newObjectInstanceOf = newObject instanceof ExampleConstructor;
console.log('value of newObjectInstanceOf:', newObjectInstanceOf);
