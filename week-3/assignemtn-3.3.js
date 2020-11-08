/*
============================================
; Title:  Control Statements
; Author: Jonathan Disla
; Date:   07 November 2020
; Description: Reformat if statement into switch
;===========================================
*/

/**
* header: constant that holds the import from disla-header.js file
* console.log: logs the function from the disla-header.js file
*/
const header = require("../disla-header.js");
console.log(header.display("Jonathan", "Disla", "Assignment 3.3"));

/*
===============================================
BEGIN ASSIGNMENT
===============================================
*/

// Declare a variable to store the integer 13
let eventKeyCode = 13

/*The following switch statement checks for the
* value of the eventKeyCode variable and if the
* condition is met, that block executes.
*/

switch (eventKeyCode){
  //checks for the condition 13 in the eventKeyCode variable
  case 13:
  //logs the following string if the condition is met
    console.log('The enter Key was pressed.');
  //breaks out of the switch block if the condition is met
    break;
  case 16:
    console.log('The shift Key was pressed.');
    break;
  case 32:
    console.log('The spacebar Key was pressed.');
    break;
  case 8:
    console.log('The backspace Key was pressed.');
    break;
  //execute following code if none of the above conditions are found
  default:
    console.log('Unrecognized Key');
    break;
}
