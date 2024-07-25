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

const num = Number('43'); // Built-in function

/**********************************************************************************************************************/

// 1.Function Declaration
const age1 = calcAge1(1999);

function calcAge1(birthYear) {
    return 2037 - birthYear;
}

// 2.Function Expression and Anonymous Function
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1999);

console.log(age1, age2);

/**********************************************************************************************************************/

// 3.Arrow Function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1999);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1999, 'Sarah'));
console.log(yearsUntilRetirement(1985, 'Jonas'));

/**********************************************************************************************************************/

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor2(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
}
console.log(fruitProcessor2(2, 3));

/**********************************************************************************************************************/

const calcAge4 = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement2 = (birthYear, firstName) => {
    const age = calcAge4(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🎉`);
        return -1;
    }
}

console.log(yearsUntilRetirement2(1999, 'Sarah'));
console.log(yearsUntilRetirement2(1960, 'Mike'));

/**********************************************************************************************************************/

