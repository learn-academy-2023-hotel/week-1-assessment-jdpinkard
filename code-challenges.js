// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code - challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a conditional statement that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two: 
// const fruit1 = "cherry"
// const fruit2 = "kiwi"
// Expected outcome: "cherry"

// Pseudo code:


// --------------------1) Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// Pseudo code:
// input: Two different sets of numbers -> padres1984WorldSeriesRuns = [2, 5, 2, 2, 4] & padres1998WorldSeriesRuns = [6, 3, 5, 3]
// output: combined the arrays resulting 9
// used: built-in method to combine both arrays
// used: .length to count the numbers
// used: .conca() to combine the numbers

// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.

const currentCohort = "Golf 2023"
// Expected output: "3202 floG"

// Pseudo code:
// input: currentCohort = "Golf 2023"
// output: reversed the letters without the string 3202 flog
// output note: I noticed the output has no string and I couldn't figured out why. 
// used .split("") to convert the string, used .reverse() to reverse the string, .join("") to join the the letters back


// --------------------3) Create the code that will log only the odd numbers from the array using the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// Expected output: 13 5 -5 27

// Pseudo code:
// input: stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// output: Odd numbers = 13 5 -5 27
// used: for loop method to output the odd number
// used: the index and assigned zero to start the count, itration process i++, Madulu divide by two(% 2) to get the odd numbers