// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
console.log(colors.push("indigo"))

// a) Your answer: 5
// b) Verify and explain: I saw Will do it before hand, but otherwise I thought it would be the array + "indigo" at the end.
// Reason why it was 5 and not the array is because .push change it into a count like .length

// --------------------1) What will this log?

const cohort = "LEARN 2023"
console.log(cohort.length)

// a) Your answer: 9
// b) Verify and explain: The correct answer was 10. I forgot to count the space. .length counts each character including the empty space between letters.

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: The index starts with 0 being the first letter so you would start counting from 0 at H ending at 4 with o.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: "Ruby"
// b) Verify and explain: Again, Index starts at 0. In this case, it's an array, so instead of characters, you go up by each selection in the array.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: "SATURDAY", "SUNDAY"
// b) Verify and explain: I was wrong. It becomes a type error because toUpperCase() cannot be applied to arrays.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: number
// b) Verify and explain: Unlike you or I, the computer reads it as what dataTypes.length is converted to.
// So instead of seeing dataTypes.length, it sees 4 which is a number.
// typeof tells you what type of syntax something is
