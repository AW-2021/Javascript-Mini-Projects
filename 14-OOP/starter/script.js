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
