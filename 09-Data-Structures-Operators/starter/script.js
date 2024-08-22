'use strict';

const heading = document.getElementsByTagName('h1');
console.log(heading);

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 12 + 12,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  // ES6+ methods
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Key names in passed object must match, but order does not have to match
  orderDelivery({ time = '20:00', mainIndex = 0, starterIndex = 1, address }) {
    console.log(
      `Order received! ${this.order(mainIndex, starterIndex)[0]} and ${
        this.order(mainIndex, starterIndex)[1]
      } will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}!`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const arr = [2, 4, 6];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// DESTRUCTURING ARRAYS

const [xx, y, z] = arr;
console.log(xx, y, z);
console.log(arr);

let [primary, , secondary] = restaurant.categories;
console.log(primary, secondary);

// Swapping variables
// const temp = primary;
// primary = secondary;
// secondary = temp;
// console.log(primary, secondary);

// Swapping Variables - OPTIMIZED
[primary, secondary] = [secondary, primary];
console.log(primary, secondary);

// Receive two return values from a function
const [starter, main] = restaurant.order(3, 1);
console.log(starter, main);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested; // Nested Destructuring
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r);

/**********************************************************************************************************************/

// DESTRUCTURING OBJECTS

const { name, openingHours: openingHrs, categories } = restaurant;
console.log(name, openingHrs, categories);

// Giving new variable names to destructured properties
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let d = 111;
let e = 999;
const obj = { d: 24, e: 8, f: 14 };

({ d, e } = obj);
console.log(d, e);

// Nested Objects
const {
  fri: { open: o, close },
} = openingHours;
console.log(o, close);

restaurant.orderDelivery({
  time: '23:30',
  address: 'Via de Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via de Sole, 21',
  starterIndex: 2,
});

/**********************************************************************************************************************/

// (...) SPREAD OPERATOR

const ogArr = [7, 8, 9];
const badNewArr = [1, 2, ogArr[0], ogArr[1], ogArr[2]];

const newArr = [1, 2, ...ogArr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Lasagna', 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(restaurant.mainMenu);
console.log(mainMenuCopy);

mainMenuCopy.pop();
mainMenuCopy.pop();

console.log(mainMenuCopy);
console.log(restaurant.mainMenu);

// Join 2 arrays
const combinedMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(combinedMenu);

// Iterables: arrays, strings, maps, sets, NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Henry`); // Cannot use spread operator within template literals

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Let's make pasta! Ingredient 3?"),
//   prompt("Let's make pasta! Ingredient 3?"),
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// (...) Spread Operator on Objects
const newRestaurant = { foundedIn: 1990, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

// Shallow copy (Primitive/ Pass-by-value copy)
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

/**********************************************************************************************************************/

// REST OPERATOR (...)

// 1) Destructuring

// Arrays
const arr2 = [1, 2, ...[3, 4]]; // Spread Operator => On RIGHT hand side of =
console.log(arr2);

const [g, h, ...others] = [1, 2, 3, 4, 5]; // Rest Operator => On LEFT hand side of =
console.log(g, h, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdayss } = restaurant.openingHours;
console.log(sat, weekdayss);

// 2) Functions

// All parameters passed are collected by REST
// operator into a new array
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 1, 9, 7, 3);

const l = [23, 5, 7];
add(...l); // Spread operator separates array elements

restaurant.orderPizza('mushrooms', 'cheese', 'olives', 'onions', 'spinach');
restaurant.orderPizza('spinach');

/**********************************************************************************************************************/

// SHORT CIRCUITING

// OR operator will return the first truthy value
console.log('---------- OR ----------');
console.log(3 || 'Jonas'); // -> 3
console.log('' || 'Jonas'); // -> 'Jonas'
console.log(true || 0); // -> true
console.log(undefined || null); // -> null

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // -> 'Hello'

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); // -> 10

restaurant.numGuests = 24;

const guests2 = restaurant.numGuests || 10;
console.log(guests2); // -> 24
console.log('---------- OR ----------');

console.log('---------- AND ----------');
console.log(0 && 'Jonas'); // -> 0
console.log(7 && 'Jonas'); // -> 'Jonas'

console.log('Hello' && 23 && null && 'jonas'); // -> null
console.log('---------- AND ----------');

// Practical Example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach', 'corn');

/**********************************************************************************************************************/

// NULLISH COALESCING OPERATOR (??)

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests); // -> 10

// Nullish: null and undefined ONLY (NOT 0 and '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); // -> 0

/**********************************************************************************************************************/

// LOGICAL ASSIGNMENT OPERATORS

const rest1 = {
  name: 'Capri',
  numGuests: 20,
  rating: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// rest1.numGuests = rest1.numGuests || 15;
// rest2.numGuests = rest2.numGuests || 15;

console.log(rest1);
console.log(rest2);

// OR Assignment Operator
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

console.log(rest1);
console.log(rest2);

// Nullish Assignment Operator
rest1.rating ??= 1;
rest2.rating ??= 1;

console.log(rest1);
console.log(rest2);

// AND Assignment Operator
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

/**********************************************************************************************************************/

// FOR-OF LOOP

const menu2 = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu2);

for (const item of menu2) console.log(item);

for (const [i, el] of menu2.entries()) {
  console.log(`${i + 1}: ${el}`);
}

console.log([...menu2.entries()]);

/**********************************************************************************************************************/

// OBJECT LITERALS

/* OpeningHours object added at the top of this file */

/**********************************************************************************************************************/

// OPTIONAL CHAINING (?.)

// Without optional chaining
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);
if (restaurant.openingHours && restaurant.openingHours.fri)
  console.log(restaurant.openingHours.fri.open); // -> 11

// console.log(restaurant.openingHours.mon.open); // ERROR

// WITH Optional Chaining
console.log(restaurant.openingHours.mon?.open); // -> undefined
console.log(restaurant.openingHours?.mon?.open); // -> undefined
console.log(restaurant.openingHours?.fri?.open); // -> 11

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'CLOSED';
  console.log(`On ${day}, we open at ${open}`);
}

// Optional Chaining for Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Optional Chaining for Arrays
const users = [{ name: 'Amy', email: 'hello@amy.com' }];

console.log(users[0]?.name ?? 'Users array empty');

// Equivalent code to above but longer
if (users.length > 0) {
  console.log(users[0].name);
} else {
  console.log('Users array empty');
}

/**********************************************************************************************************************/

// OBJECT KEYS

const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open for ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// OBJECT VALUES

const values = Object.values(openingHours);
console.log(values);

// ENTIRE OBJECT

const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On day ${key}: we open at ${open} and close at ${close}`);
}

/**********************************************************************************************************************/

// SETS

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(new Set('Jonas')); // -> {'J', 'o', 'n', 'a', 's'}

console.log(ordersSet);
console.log(ordersSet.size);
console.log(ordersSet.has('Brioche')); // Similar to includes() method in arrays
console.log(ordersSet.has('Pizza'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread'); // Second one ignored by Set, as all Set values are unique
console.log(ordersSet);

ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) {
  console.log(order);
}

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = [...new Set(staff)]; // Converting Set to array
// const staffUnique = Array.from(new Set(staff)); // Converting Set to array
console.log(staffUnique);

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('johnhenderson').size);

/**********************************************************************************************************************/

// MAPS

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzaria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest);

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 9;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();
console.log(rest);
console.log(rest.size);

const array = [1, 2];
// rest.set([1, 2], 'Test');
rest.set(array, 'Test');
rest.set(document.querySelector('h1'), 'HTML Heading');
console.log(rest);

// console.log(rest.get([1, 2])); // -> undefined
console.log(rest.get(array)); // -> 'Test'

/**********************************************************************************************************************/

// MAPS ITERATION

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);
console.log(question);

// Convert object (to arrays) to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));

console.log(hoursMap);

// Quiz App
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  } else {
    continue;
  }
}
// const answer = prompt('Your answer: ');
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === Number(answer)));

// Convert Map to array (array of arrays)
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);
console.log([...question.entries()]);

/**********************************************************************************************************************/

// STRINGS - PART 1

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4)); // Does not change the underlying string, as strings are primitives
console.log(airline);
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2)); // Includes last two letters
console.log(airline.slice(1, -1)); // Excludes last letter

const checkMiddleSeat = function (seat) {
  // B and E are the middle seats
  const s = seat.slice(-1);
  console.log(
    s === 'B' || s === 'E'
      ? 'You got the middle seat 😬'
      : "You didn't get a middle seat 🤩"
  );
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('john'));
console.log(typeof new String('john'));

console.log(typeof new String('john').slice(1));

/**********************************************************************************************************************/

// STRINGS - PART 2

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
console.log(passengerLower);
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Check email
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

const normalEmail = loginEmail.toLowerCase().trim();
console.log(normalEmail);
console.log(normalEmail === email);

// replace and replaceAll Methods
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

// REGEX OPERATIONS
const regex = /door/gi;
const announcementNew = announcement.replace(regex, 'gate');
console.log(announcementNew);

// Booleans
const plane2 = 'Airbus A320neo';
console.log(plane2.includes('A320'));
console.log(plane2.includes('Boeing'));
console.log(plane2.startsWith('Air'));

if (plane2.startsWith('Airbus') && plane2.endsWith('neo')) {
  console.log('Part of the NEW Airbus family!');
}

// Practice Exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  const regex = /knife|taser|gun|weapon/g;

  if (regex.test(baggage)) {
    console.log('NOT CLEAR! You are not allowed on board.');
  } else {
    console.log('Good to go! Welcome aboard!');
  }

  // if (baggage.includes('knife') || baggage.includes('taser')) {
  //   console.log('NOT CLEAR! You are not allowed on board.');
  // } else {
  //   console.log('Good to go! Welcome aboard!');
  // }
};

checkBaggage('I have a laptop, some Food and a pocket Knife.');
checkBaggage('Just socks and a camera');
checkBaggage('Got some snacks and an electric taser for protection');

/**********************************************************************************************************************/

// STRINGS - PART 3

// split Method
console.log('a+very+nice+string'.split('+'));
console.log('Amelia Henderson'.split(' '));

const [firstName, lastName] = 'Amelia Henderson'.split(' ');
console.log(firstName, lastName);

// join Method
const fullName = ['Ms.', firstName, lastName.toUpperCase()].join(' ');
console.log(fullName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  let namesUpper = [];

  console.log(names);

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }

  console.log(namesUpper);
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('jane doe');

// padStart and padEnd Methods
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+')); // FORMAT: str.padStart(total length of str, padding character)
console.log('John'.padStart(20, '/').padEnd(30, '/'));

const maskCreditCard = function (number) {
  const str = number.toString(); // ALT way to convert number to string: number + ''
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(6893321));
console.log(maskCreditCard(37592785462));
console.log(maskCreditCard(8302355611154747));

// repeat Method
const message2 = 'Bad weather... All departures delayed...';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};

planesInLine(3);
planesInLine(6);
planesInLine(12);

/**********************************************************************************************************************/

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

console.log(flights.split('+'));

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, flightTime] = flight.split(';');

  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${flightTime.replace(
    ':',
    'h'
  )})`.padStart(50);

  console.log(output);
}
