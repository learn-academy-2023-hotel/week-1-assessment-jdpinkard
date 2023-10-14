// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
console.log(colors.push("indigo"))

// a) Your answer: 5
// b) Verify and explain: It will count the length of the new array to add first. console.log(colors) will add "indigo" in the end.

// --------------------1) What will this log?

const cohort = "LEARN 2023"
console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: Correct, counted the string including the space between the letters, the result was 10.

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: Correct, the 4 indicates the possition of the index value. In this case counting from zero the o is number 4.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: "JavaScript"
// b) Verify and explain: Wrong, I wasn't paying attention and mistakenly answered "JavaScript" instead of "Ruby". Honest mistake.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
console.log(weekendDays.toUpperCase())

// a) Your answer: "SATURDAY", "SUNDAY"
// b) Verify and explain:  I blieve my answer is correct. I am not sure why I'm getting ("weekendDays.toUpperCase is not a function") error.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: 4
// b) Verify and explain: Wrong, I thought when I saw .length, I went stright counting the index value. I still couldn't figured out.