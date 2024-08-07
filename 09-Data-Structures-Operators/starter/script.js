'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Key names in passed object must match, but order does not have to match
  orderDelivery: function ({
    time = '20:00',
    mainIndex = 0,
    starterIndex = 1,
    address,
  }) {
    console.log(
      `Order received! ${this.order(mainIndex, starterIndex)[0]} and ${
        this.order(mainIndex, starterIndex)[1]
      } will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}!`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const arr = [2, 4, 6];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// DESTRUCTURING ARRAYS
const [x, y, z] = arr;
console.log(x, y, z);
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
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

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
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

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
