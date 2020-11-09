/*
============================================
; Title:  Loops
; Author: Jonathan Disla
; Date:   08 November 2020
; Description: Check if a chosen number and a random number match
;===========================================
*/

/**
* header: constant that holds the import from disla-header.js file
* console.log: logs the function from the disla-header.js file
*/
const header = require("../disla-header.js");
console.log(header.display("Jonathan", "Disla", "Assignment 3.4"));

/*
===============================================
BEGIN ASSIGNMENT
===============================================
*/
//===================== Step 1=======================

//Printing out a title to the console
console.log("-- DO THE NUMBERS MATCH GAME --")

//This function randomizes numbers from 1 to 10
function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}

//Number to match with a randomly chosen number
let firstNum = 9;


//This function takes in two parameters
function match(a, b){
  //This if statement checks if the parameters match
  //then returns true or false respectively
  if(a === b){
    return true;
  }else{
    return false;
  }
}

//this function takes two parameters and logs them along with some string
function logMismatch(c, d){
  console.log("\n " + c + " does not match! " + d);
}

//this function takes two parameters and logs them along with some string
function logMatch(e, f){
  console.log("\n " + e  + " does match " + f + "!");
}

//The below for loop iterates 10 times over the randomNumber function
for (let i = 0; i < 10; i++) {
  let randNum = randomNumber();
  /*This if..else block takes in the firstNum variable and compares it to
  * the random number chosen by the randomNumber function.
  * if the number matches the logMatch function executes
  * else the logMisMatch function executes.
  */

  if (match(firstNum, randNum)){
    logMatch(firstNum, randNum);
  }else{
    logMismatch(firstNum, randNum);
  }
}


