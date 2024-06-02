#! /usr/bin/env node

// 1) computer will generate a random number,
// 2) user input for guessing number,
// 3) compare user input with computer generated number and show result,

import inquirer from "inquirer";
console.log("wellcome to number guessing game");

const randomNumber = Math.floor(Math.random()*6+1);
const answers = await inquirer.prompt([ {
    name: "userGuessedNumber",
    type: "number",
    message: "Please Guess a Number between 1 to 6:",
},
]);
if (answers.userGuessedNumber===randomNumber){
    console.log("congratulation! you guessed the right number,");
} else{ console.log("you guessed wrong number so please try again");}
