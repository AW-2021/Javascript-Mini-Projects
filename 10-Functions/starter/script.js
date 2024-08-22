'use strict';

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

const flight = 'LH234';
const amy = {
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
