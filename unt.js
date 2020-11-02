/*
============================================
; Title: Discussion Board 3.1
; (Control Statements)
; Author: Kevin Jones
; Date: 2 November 2020
; Edited by: Jonathan Disla
; Description: Control statement program
; with at least two errors
;===========================================
*/

// declare variables
// created a variable called expression to hold the expression instead
let expression = 1 + 1;
let correct = "This is correct.";
let incorrect = "This is incorrect.";

// switch statement which will test if the value of expression variable is found
switch (expression) {
  //changed
  case 2:
    console.log(correct);
    break;
  case 4:
    console.log(incorrect);
    break;
  case 6:
    console.log(incorrect);
    break;
  case 8:
    console.log(incorrect);
    break;
  default:
    console.log("No match found");
    break;
}
