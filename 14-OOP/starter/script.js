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
