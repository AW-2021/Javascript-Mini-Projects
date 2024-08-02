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
