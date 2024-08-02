'use strict';

// function calcAge has GLOBAL SCOPE
function calcAge(birthYear) {
  // age has FUNCTION SCOPE
  const age = 2024 - birthYear;

  // function printAge has FUNCTION/ BLOCK SCOPE
  function printAge() {
    // output has FUNCTION SCOPE
    const output = `${firstName}, you are ${age}, born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1991 && birthYear <= 1996) {
      // millenial has FUNCTION SCOPE
      var millenial = true;
      // str has BLOCK SCOPE
      const str = `Oh, and you're a millenial, ${firstName}!`;
      console.log(str);
    }
    // console.log(str); // -> str is not defined (Parent cannot access child variables)
    console.log(millenial);
  }
  printAge();

  return age;
}

// firstName has GLOBAL SCOPE
const firstName = 'Amy';
calcAge(1995);
