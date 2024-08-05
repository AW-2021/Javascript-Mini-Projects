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
