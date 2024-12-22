// age = 1;
// if(age >= 18){
//     console.log("You are an adult");
// }
// else(
//     console.log("You are a minor")
// )

const prompt = require('prompt-sync')(); // To take user input
const a = parseInt(prompt("Enter the digits: ")); // Get input from user and convert to an integer

if (a >= 100) { // Correct comparison operator
    console.log("The number is greater than or equal to 100");
} else {
    console.log("The number is less than 100");
}
 




