// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = 23;
// if (x === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;

console.log(calcAge(1992));

/**********************************************************************************************************************/

// Using Google, StackOverflow and MDN

// PROBLEM 1:
/* We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of 
temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error." */

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (tempArr) {
  let min = tempArr[0];
  let max = tempArr[0];

  // METHOD 1
  for (let i = 0; i < tempArr.length; i++) {
    let current = tempArr[i];

    if (typeof current !== 'number') continue;

    if (current < min) min = current;
    if (current > max) max = current;
  }

  // METHOD 2 -> Must remove 'error' or won't work
  /*tempArr = tempArr.filter(el => typeof el === 'number');
  console.log(tempArr);
  let min = Math.min(...tempArr);
  let max = Math.max(...tempArr);*/

  console.log(min, max);
  return max - min;
};

console.log(calcTempAmplitude(temperatures));

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays
const temperaturesNew = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitudeNew = function (temps1, temps2) {
  const tempArr = temps1.concat(temps2);
  console.log(tempArr);

  let min = tempArr[0];
  let max = tempArr[0];

  for (let i = 0; i < tempArr.length; i++) {
    let current = tempArr[i];

    if (typeof current !== 'number') continue;

    if (current < min) min = current;
    if (current > max) max = current;
  }

  console.log(min, max);
  return max - min;
};

console.log(
  calcTempAmplitudeNew(temperatures, [4, 19, -8, 0, 'error', -24, 1])
);

/**********************************************************************************************************************/

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    //value: prompt('Degrees celsius: '), // Prompt always returns a string
    value: 10,
  };

  // B) FIND BUG
  console.log(measurement);
  console.table(measurement);
  console.log(measurement.value);
  //console.warn(measurement.value);
  //console.error(measurement.value);

  // C) FIX BUG
  const kelvin = Number(measurement.value) + 273;
  return kelvin;
};

// A) IDENTIFY BUG
console.log(measureKelvin());

// Using a debugger
const calcTempAmplitudeBug = function (temps1, temps2) {
  const tempArr = temps1.concat(temps2);
  console.log(tempArr);

  let min = 0;
  let max = 0;

  for (let i = 0; i < tempArr.length; i++) {
    let current = tempArr[i];

    if (typeof current !== 'number') continue;

    // debugger;
    if (current < min) min = current;
    if (current > max) max = current;
  }

  console.log(min, max);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) IDENTIFY BUG
console.log(amplitudeBug);

/**********************************************************************************************************************/

// CODING CHALLENGE #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let string = '';

  for (let i = 0; i < arr.length; i++) {
    string += `... ${arr[i]}°C in ${i + 1} days `;
  }

  console.log(string + '...');
};

printForecast(data1);
printForecast(data2);

/**********************************************************************************************************************/
