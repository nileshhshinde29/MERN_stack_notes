/* 

prototype: 
- It is an internal property of javascript.
- It allow to inherit properties from other object.
- Every JavaScript object has a prototype.


*/
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding a method to the prototype of Person
Person.prototype.greet = function () {
    console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
};

// Creating instances of Person
var person1 = new Person('Alice', 30);
var person2 = new Person('Bob', 25);

// Both instances can use the greet method even though it's defined in the prototype
person1.greet(); // Outputs: Hello, my name is Alice and I am 30 years old.
person2.greet(); // Outputs: Hello, my name is Bob and I am 25 years old.



// ---------  -----------  -----------  -----------  ----------  ----------  ---------

/* 
# Prototype chaining:

 When you access a property or method of an object, and if that property or method doesn't exist on the object itself, 
  JavaScript will look for it in the object's prototype. This process continues recursively up the prototype chain until 
  it reaches the top-level object (Object.prototype).

*/
// Define a parent object
let Person = {
    name: "nilesh"
}

let newObj = Object.create(Person)

newObj.lastName = "shinde"

console.log(newObj.name)    // 
console.log(newObj.lastName) // shinde