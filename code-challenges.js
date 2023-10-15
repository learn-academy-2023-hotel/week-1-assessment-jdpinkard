// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code - challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a conditional statement that evaluates two strings and 
// determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
// const fruit1 = "cherry"
// const fruit2 = "kiwi"
// Expected outcome: "cherry"

// Pseudo code:
// input: two strings => fruit1 = "apple" and fruit2 = "banana" 
// output: comparing to determine which has more characters | presumed "banana"
// Use conditional statement if/else 
// Condition comparing the length of each string.   .length
// Creating two outcomes, one being fruit1 is larger or fruit 2
if (fruit1.length > fruit2.length){
    console.log(fruit1)
}   else {
    console.log(fruit2)
}
// Output was: banana

// --------------------1) Create the code that will combine the two arrays and 
// return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// Pseudo code:
// input: two arrays and determine length
// output: combining of the two arrays and then determining length | presumed 9
// combine the two arrays via concat
// use .length to determine the length of the combined arrays
console.log(padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns).length)
// Output was: 9



// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.

const currentCohort = "Golf 2023"
// Expected output: "3202 floG"

// Pseudo code:
// input: a string "Golf 2023"
// output: split the string into an array so you can do array things, reversing the string, then join it back together into a string
// Use .split("") to turn it into an array
// use .reverse() to reverse the now array
// use .join("") to turn it from an array to a string
console.log(currentCohort.split("").reverse().join(""))

// --------------------3) Create the code that will log only the odd numbers from the array using the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// Expected output: 13 5 -5 27

// Pseudo code:
// Input" An array
// Output: Output only odd numbers
// Use a loop to run a conditional statement against each number to detect if it is odd using remainder principle and bang to ensure the remainder is not even
for(i=0; i < stockExchange.length ; i++){
    if (stockExchange[i] % 2 !== 0) {
        console.log(stockExchange[i])
    }
}