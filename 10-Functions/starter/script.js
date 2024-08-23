'use strict';

// DEFAULT PARAMETERS

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 10, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking(
  'LH123',
  undefined,
  1000
); /* Specifiying as undefined is the same as never
    setting it, so default parameter used instead */

/**********************************************************************************************************************/

// HOW PASSING ARGUMENTS WORKS: VALUE VS. REFERENCE

const flight = 'LH234'; // String : PRIMITIVE TYPE
const amy = {
  // Object : REFERENCE TYPE
  name: 'Amy Henderson',
  passport: 2945723091,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Ms. ' + passenger.name;

  if (passenger.passport === 2945723091) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, amy);
console.log(flight);
console.log(amy);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(amy);
checkIn(flight, amy);

/**********************************************************************************************************************/

// FUNCTIONS ACCEPTING CALLBACK FUNCTIONS

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  console.log(first, others);

  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-Order Function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is pretty cool!', upperFirstWord);
transformer('JavaScript is pretty cool!', oneWord);

// JS uses callabcks all the time
const high5 = function () {
  console.log('👋');
};

// addEventListener is the higher-order function
document.querySelector('h1').addEventListener('click', high5); // high5 is the callback function
['Jonas', 'Martha', 'Adam'].forEach(high5);

/**********************************************************************************************************************/

// FUNCTIONS RETURNING FUNCTIONS

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetingHi = greet('Hi');
greetingHi('John');
greetingHi('Maria');

greet('Hey')('Amy');

// Challenge
const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

greetArrow('Hello')('Amy');

/**********************************************************************************************************************/
