/* JavaScript Fundamentals - Part 1 
            ASSIGNMENTS           */

// LECTURE 1
const country = 'Pakistan';
const continent = 'Asia';
let population = 235.8;

console.log(`Country: ${country}\nContinent: ${continent}\nPopulation: ${population}`)

// LECTURE 2
const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// LECTURE 3
language = 'Urdu';

// LECTURE 4
console.log(`Halved Population: ${population / 2}`); // Problem 1

console.log(`Increased Population: ${++population}`); // Problem 2

let finlandPopulation = 6; // Problem 3
console.log(`Is ${country}'s population more than Finland's: ${population > finlandPopulation}`);

let avgPopulation = 33; // Problem 4
console.log(`Is ${country}'s population less than average: ${population < avgPopulation}`);

let description = `${country} is in ${continent}, and its ${population} million people speak ${language}`; // Problem 5
console.log(description);