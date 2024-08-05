'use strict';

// function calcAge has GLOBAL SCOPE
function calcAge(birthYear) {
  // age has FUNCTION SCOPE
  const age = 2024 - birthYear;

  // function printAge has FUNCTION SCOPE
  function printAge() {
    // output has FUNCTION SCOPE
    let output = `${firstName}, you are ${age}, born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1991 && birthYear <= 1996) {
      // millenial has FUNCTION SCOPE
      var millenial = true;

      // firstName will have BLOCK SCOPE
      const firstName = 'John'; // John gets printed out in str, NOT Amy (closest scope lookup)

      output = 'NEW OUTPUT!'; // Reassigning outer scope's output variable
      // const output = 'NEW OUTPUT!'; // It will be completely new variable & cannot be printed outside block, as it has BLOCK SCOPE

      // str has BLOCK SCOPE
      const str = `Oh, and you're a millenial, ${firstName}!`;
      console.log(str);

      // function add has BLOCK SCOPE (only in strict mode)
      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str); // -> str is not defined (Parent cannot access child variables)
    console.log(millenial);
    // console.log(add(4, 5)); // -> add is not defined (function has block scope)
    console.log(output); // -> NEW OUTPUT
  }
  printAge();

  return age;
}

// firstName has GLOBAL SCOPE
const firstName = 'Amy';
calcAge(1995);

/**********************************************************************************************************************/

// VARIABLE HOISTING
console.log(myName); // var variables always hoisted, initialized to 'undefined'
// console.log(job); // TDZ for let variable
// console.log(year);  // TDZ for const variable

var myName = 'Amy';
let job = 'developer';
const year = '2001';

// FUNCTION HOISTING
console.log(addDecl(2, 3)); // Hoisting done for function declaration
// console.log(addExpr(2, 3)); // No hoisting for function expression declared with const
// console.log(addArrow(2, 3)); // No hoisting for arrow function declared with const

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a, b;
};

var addArrow = (a, b) => a + b;

// EXAMPLE (OF PITFALLS OF HOISTING)
console.log(numProducts);
if (!numProducts) deleteShopingCart();

var numProducts = 10;

function deleteShopingCart() {
  console.log('All products deleted!');
}

var x = 1; // Creates property on window object
let y = 2; // Does not create property on window object
const z = 3; // "

console.log(window);

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

/**********************************************************************************************************************/

// THIS KEYWORD
console.log(this); // -> Window {...} (Global object)

// Function expressions get their own 'this' keyword
const calcAge2 = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); // -> undefined
};

// Arrow funcion does not get its own this keyword, so uses
// 'this' keyowrd of parent scope (here that is global scope)
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); // -> Window {...} (Global object)
};

calcAge2(1999);
calcAgeArrow(2001);

const amy = {
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year);
    console.log(this);
  },
};

amy.calcAge(); // -> 2037 - this.year = 2037 - 1991 = 46

const matilda = {
  year: 2017,
};

matilda.calcAge = amy.calcAge; // Method Borrowing
// console.log(matilda);
matilda.calcAge(); // -> 2037 - this.year = 2037 - 2017 = 20

const f = amy.calcAge;
// f(); // -> ERROR

/**********************************************************************************************************************/

// REGULAR FUNCTION VS. ARROW FUNCTIONS IN OBJECTS
// var fName = 'Matilda';

const john = {
  fName: 'John',
  year: 1996,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    /*const self = this; // Allows regular functions inside methods to access the object
    const isMillenial = function () {
      // console.log(this); // -> undefined
      // console.log(this.year >= 1981 && this.year <= 1996);
      console.log(self);
      console.log('ANSWER: ' + (self.year >= 1981 && self.year <= 1996));
    };

    isMillenial(); // -> ERROR (Considered as a regular function) */

    // Solution 2 (ES6+)
    const isMillenial = () => {
      console.log(this);
      console.log('ANSWER 2: ' + (this.year >= 1981 && this.year <= 1996));
    };

    isMillenial(); // -> ERROR (Considered as a regular function)
  },

  greet: () => {
    console.log(this);
    console.log(`Hey, ${this.fName}!`);
  },
};

john.calcAge();
john.greet(); // -> Hey, undefined! (Parent Scope: GLOBAL Scope)
console.log(this.fName); // -> undefined

// ARGUMENTS KEYWORD
const addExpr2 = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr2(7, 3);
addExpr2(7, 3, 2, 5, 6);

const addArrow2 = (a, b) => {
  console.log(arguments); // -> ERROR
  return a + b;
};
// addArrow2(3, 5);

/**********************************************************************************************************************/

let age = 30;
let oldAge = age;
age = 32;
console.log(age); // -> 32
console.log(oldAge); // -> 30

const me = {
  name: 'Amy',
  age: 26,
};

const friend = me;

console.log(me);
console.log(friend);

friend.age = 22;

console.log('Me: ', me);
console.log('Friend: ', friend);

/**********************************************************************************************************************/

// PRIMITIVE TYPES
let lastName = 'William';
let oldLastName = lastName;
lastName = 'David';
console.log(lastName, oldLastName); // -> David Williams

// REFERENCE TYPES
const jess = {
  firstName: 'Jess',
  lastName: 'Williams',
  age: 27,
};

// Copying objects
const marriedJess = jess; // Reference copy (Points to same address in heap)
marriedJess.lastName = 'Gabriel';
console.log('Before marriage: ', jess);
console.log('After marriage: ', marriedJess);

const jess2 = {
  firstName: 'Jess',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = { ...jess2 }; // Pass-by-value copy (Shallow copy)
jessicaCopy.lastName = 'A. Gabriel';
jessicaCopy.age = 29;
console.log('Before marriage: ', jess2);
console.log('After 2 marriage yrs: ', jessicaCopy);

const jessicaCopy2 = Object.assign({}, jess2); // Pass-by-value copy (Shallow copy)
jessicaCopy2.lastName = 'Davis';
console.log('Before marriage: ', jess2);
console.log('After marriage: ', jessicaCopy2);

jessicaCopy2.family.push('Gabriel');
jessicaCopy2.family.push('Mary');
console.log('Before marriage: ', jess2);
console.log('After marriage: ', jessicaCopy2);
