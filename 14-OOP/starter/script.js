'use strict';

// CONSTRUCTOR FUNCTIONS & THE NEW OPERATOR

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const john = new Person('John', 1991);
console.log(john);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}

const matilda = new Person('Matilda', 2017);
const jill = new Person('Jill', 2001);
console.log(matilda, jill);

const jay = 'Jay';

console.log(john instanceof Person); // -> true
console.log(jay instanceof Person); // -> false

/**********************************************************************************************************************/

// PROTOTYPES

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};

john.calcAge();
matilda.calcAge();

console.log(john.__proto__);
console.log(john.__proto__ === Person.prototype); // -> true

console.log(Person.prototype.isPrototypeOf(john)); // -> true
console.log(Person.prototype.isPrototypeOf(Person)); // -> false

Person.prototype.species = 'Homo Sapiens';
console.log(john, matilda);
console.log(john.species, matilda.species);

console.log(john.hasOwnProperty('firstName')); // -> true
console.log(john.hasOwnProperty('species')); // -> true

/**********************************************************************************************************************/

// PROTOTYPAL INHERITANCE ON BUILT-IN OBJECTS

console.log(john.__proto__);
// Object.prototype (top of prototype chain)
console.log(john.__proto__.__proto__);
console.log(john.__proto__.__proto__.__proto__); // -> null

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9, 3];

console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); // -> true

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

/**********************************************************************************************************************/

// ES6 CLASSES

// Class expression
// const PersonCl = class {};

// Class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Class methods are added to .prototype property of the class
  // All objects of this class created will inherit PersonCl.prototype
  calcAge() {
    console.log(2024 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}!`);
  }
}

const jess = new PersonCl('Jess', 1996);
console.log(jess);
jess.calcAge();

console.log(jess.__proto__ === PersonCl.prototype); // -> true

// Manually adding a method to the prototype of class
PersonCl.prototype.greet2 = function () {
  console.log(`Hey ${this.firstName}`);
};
jess.greet();
jess.greet2();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens (since they are a special type of a function)
// 3. Classes are executed in 'strict' mode

/**********************************************************************************************************************/

// SETTERS AND GETTERS

const account = {
  owner: 'Ella',
  movements: [200, 530, 120, 300],

  get latest() {},
};
