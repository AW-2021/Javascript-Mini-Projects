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

// ARRAYS
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2003, 2020);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends.length);
console.log(friends[friends.length-1]);

friends[2] = 'Jay';
console.log(friends);

// Cannot replace the entire array
// friends = ['Bob', 'Alice']; // ERROR

// Arrays can have elements with different data types
const firstName = 'John';
const john = [firstName, 'Henderson', 2037 - 1999, 'teacher', friends];
console.log(john);
console.log(john.length);

// Exercise
const calcAge5 = function (birthYear) {
    return 2037 - birthYear;
}

const years1 = [1990, 1967, 2002, 2010, 2018];

const age4 = calcAge5(years1[0]);
const age5 = calcAge5(years1[1]);
const age6 = calcAge5(years1[years1.length - 1]);

console.log(age4, age5, age6);

const ages = [calcAge5(years1[0]), calcAge5(years1[1]), calcAge5(years1[years1.length - 1])];
console.log(ages);

/**********************************************************************************************************************/

const friendsArr = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friendsArr.push('Alice');
console.log(friendsArr);
console.log(newLength);

friendsArr.unshift('John');
console.log(friendsArr);

// Remove elements
friendsArr.pop(); // Last el
const popped = friendsArr.pop();
console.log(popped);
console.log(friendsArr);

friendsArr.shift(); // First el
console.log(friendsArr);

console.log(friendsArr.indexOf('Steven')); // -> 1
console.log(friendsArr.indexOf('Bob')); // -> -1

friendsArr.push(23);
console.log(friendsArr.includes('Steven'));
console.log(friendsArr.includes('Bob'));
console.log(friendsArr.includes(23));

if (friendsArr.includes('Steven')) {
    console.log('You have a friend called Steven');
}

/**********************************************************************************************************************/

// OBJECTS

const jonasArray = [
    'Jonas',
    'Henry',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Henry',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}

/**********************************************************************************************************************/

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// const interestedIn = prompt(`What do you want to know about Jonas? 
// Choose between firstName, lastName, age, job or friends.`);

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job or friends.');
// }

jonas.location = 'Denmark';
jonas['twitter handle'] = '@jonashenry';
console.log(jonas);

// CHALLENGE
// Dynamically write the sentence: Jonas has 3 friends, and his best friend is called Michael
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

/**********************************************************************************************************************/

const alice = {
    firstName: 'Alice',
    lastName: 'Brown',
    birthYear: 1996,
    job: 'developer',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    
    // calcAge: function(birthYear) {
    //     return 2037 - birthYear;
    // }
        
    // calcAge: function () {
    //     console.log(this); // -> {} Object
    //     return 2037 - this.birthYear;
    // }
            
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and she has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
    }
}
        
// Identical to writing a regular function expression
/*const calcAge = function (birthYear) {
    return 2037 - birthYear;
}*/
console.log(alice);
           
// console.log(alice['calcAge'](1996));

console.log(alice.calcAge());
console.log(alice.age);
           
// CHALLENGE
// Dynamically write the sentence: "Alice is a 41-year old developer, and she has a driver's license."
console.log(alice.getSummary());

/**********************************************************************************************************************/

// FOR LOOPS
for(let rep = 1; rep <= 20; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

/**********************************************************************************************************************/

const johnArray = [
    'John',
    'Henderson',
    2037 - 1999,
    'programmer',
    ['Michael', 'Peter', 'Steven'],
    true
];

// Initializing an empty array
const types = [];

for (let i = 0; i < johnArray.length; i++) {
    // Reading from johnArray
    console.log(johnArray[i], typeof johnArray[i]);

    // Filling types array
    // types[i] = typeof johnArray[i]; // METHOD 1
    types.push(typeof johnArray[i]); // METHOD 2
}

console.log(types);

const yearsArr = [1991, 2007, 1969, 2020];
const agesArr = [];

for (let i = 0; i < yearsArr.length; i++) {
    agesArr.push(2037 - yearsArr[i]);
}
console.log(agesArr);

// continue and break keywords for loops
console.log('---ONLY STRINGS---');
for (let i = 0; i < johnArray.length; i++) {
    if (typeof johnArray[i] !== 'string') continue;

    console.log(johnArray[i], typeof johnArray[i]);
}

console.log('---BREAK WITH NUMBER---');
for (let i = 0; i < johnArray.length; i++) {
    if (typeof johnArray[i] == 'number') break;

    console.log(johnArray[i], typeof johnArray[i]);
}

/**********************************************************************************************************************/

const peterArray = [
    'Peter',
    'Brown',
    2037 - 2002,
    'teacher',
    ['Michael', 'Jonas', 'Alice']
];

// 0, 1, 2 ... 4 -> Forward looping
// 4, 3, 2 ... 0 -> Backward looping
for (let i = peterArray.length - 1; i >= 0; i--) {
    console.log(i, peterArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weights repetition ${rep} 🏋️‍♀️`);
    }
}

/**********************************************************************************************************************/

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

// WHILE LOOPS
let rep = 1;
while (rep <= 10) {
    console.log(`WHILE: Lifting weights repetition ${rep} 🏋️`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6)
        console.log('The loop is about to end...');
}