/***************  ASSIGNMENTS  *****************/

/******* JavaScript Fundamentals - Part 1 *******/
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
language = 'urdu';

// LECTURE 4
console.log(`Halved Population: ${population / 2}`); // Problem 1

console.log(`Increased Population: ${++population}`); // Problem 2

let finlandPopulation = 6; // Problem 3
console.log(`Is ${country}'s population more than Finland's: ${population > finlandPopulation}`);

let avgPopulation = 33; // Problem 4
console.log(`Is ${country}'s population less than average: ${population < avgPopulation}`);

let description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language; // Problem 5
console.log(description);

// LECTURE 5
description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

// LECTURE 6
if (population > avgPopulation)
    console.log(`${country}'s population is ${population - avgPopulation} million above average`);
else 
    console.log(`${country}'s population is ${avgPopulation - population} million below average`);
 
// LECTURE 7
console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> 6 + '17' = '617'
console.log('19' - '13' + 17); // -> 6 + 17 = 23
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); /* -> 11 + '4' + 9 - 4 - 2 = '114' + 9 - 4 - 2 
                                        = '1149' - 4 - 2 = 1145 - 2 = 1143 */

// LECTURE 8
/* const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

if (numNeighbours === 1)
    console.log('Only 1 border!');
else if (numNeighbours > 1)
    console.log('More than 1 border');
else
    console.log('No borders'); */

// LECTURE 9
console.log(language === 'english' && population < 50 && !isIsland ? `You should live in ${country} :)` : `${country} does not meet your criteria :(`);

// LECTURE 10
switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
        break;
}

// LECTURE 11
console.log(`${country}'s population is ${population > avgPopulation ? 'above' : 'below'} average`);
