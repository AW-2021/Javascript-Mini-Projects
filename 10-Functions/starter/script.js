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

// CALL AND APPLY METHODS

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],

  //book: function ()
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(244, 'Jane Watson');
lufthansa.book(631, 'Joe Brown');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book; // book is a regular (external) function, so 'this' keyword is undefined in it

// Does NOT work
// book(23, 'Sarah Williams');

// Call Method (object, arg1, arg2, arg3, ...)
book.call(eurowings, 25, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, '507', 'Amy Henderson');
console.log(swiss);

// Apply Method (object, array of arguments)
const flightData = [321, 'George Cooper'];
book.apply(swiss, flightData);

book.call(swiss, ...flightData);
console.log(swiss);

/**********************************************************************************************************************/

// BIND METHOD

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(25, 'Steven Williams');

const bookEW62 = book.bind(eurowings, 62);
bookEW62('Jonas Anderson');
bookEW62('Martha Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this); // -> <button></button>

  this.planes++;
  console.log(this.planes);
};

// In an event handler function, this keyword always points to element
// on which that handler is attached to
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

/**********************************************************************************************************************/

// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

const runOnce = function () {
  console.log('This will run again');
};
runOnce();

// IIFE
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

// console.log(isPrivate);

(() => console.log('This will ALSO never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate);

/**********************************************************************************************************************/

// CLOSURES

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

/**********************************************************************************************************************/

// CLOSURE EXAMPLES

// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);

// Example 2
const boardPassenger = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassenger(240, 3);

/**********************************************************************************************************************/
