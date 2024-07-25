'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;

/**********************************************************************************************************************/

function logger() {
    console.log('My name is Amina');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(5, 4);
console.log(appleOrangeJuice);

const num = Number('43');

/**********************************************************************************************************************/

// Function Declaration
const age1 = calcAge1(1999);

function calcAge1(birthYear) {
    return 2037 - birthYear;
}

// Function Expression and Anonymous Function
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1999);

console.log(age1, age2);

/**********************************************************************************************************************/

