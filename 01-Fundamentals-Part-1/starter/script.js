let js = 'amazing';
if(js === 'amazing')
    alert('JavaScript is FUN!');

console.log(40 + 8 + 23 - 10);
console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
//console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
const PI = 3.1415;

let myFirstJob = 'Coder'; // More intuitive names
let myCurrentJob = 'Teacher';

// let job1 = 'programmer'; // Less intuitive names
// let job2 = 'teacher';

console.log(myFirstJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1995;
console.log(typeof year);
console.log(typeof null); // -> object (null is not an object, legacy reasons for this bug)

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990; (NOT ALLOWED) 
// const job; (NOT ALLOWED, Must be initialized)

var job = 'programmer';
job = 'teacher';

lastName = 'Henry';
console.log(lastName);

// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 -> 3 to the power of 2 = 2 * 2 * 2 = 8

const firstName1 = 'Jonas';
const lastName1 = 'Henry';
console.log(firstName1 + ' ' + lastName1);

// Assignment operators
let x = 10 + 5;
x += 10; // x = x + 10
x *= 4; // x = x * 10
x++; // x = x + 1
x--; // x = x - 1
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=

console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

let y, z;
y = z = 25 - 10 - 5;
console.log(y, z);

const averageAge = (ageSarah + ageJonas) / 2;
console.log(ageJonas, ageSarah, averageAge); 

const firstName2 = 'Jonas';
const job1 = 'developer';
const birthYear1 = 1991;
const year1 = 2037;

const jonas = `I'm ${firstName2}, a ${year1 - birthYear1} year old ${job1}!`;
console.log(jonas);

// Backticks can be used for any regular strings
console.log(`Just a regular string...`);
console.log('String with \nmultiple \nlines');

// No need to add \n for newline with backticks
console.log(`String with
multiple
lines`);

const age1 = 19;

if (age1 >= 18) {
    console.log('Sarah can get a driving license 🚗');
} else {
    const yearsLeft = 18 - age1;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear2 = 2005;
let century;

if (birthYear2 <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

// Type Conversion - Done manually
const inputYear = '1991';
console.log(inputYear);
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas')); // -> NaN (which means an invalid number)
console.log(typeof NaN); // -> number

console.log(String(23), 23); // opposite of Number()

// Type Coercion - Done automatically
console.log('I am ' + 23 + ' years old.'); // 23 num is converted to string
console.log('23' - '10' - 3) // -> 10 (number)
console.log('23' + '10' + 3) // -> 23103 (string)
console.log('23' * '2'); // -> 46 (number)
console.log('23' / '2'); // -> 46 (number)