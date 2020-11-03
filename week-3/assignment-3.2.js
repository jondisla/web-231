/*
============================================
; Title:  Pattern Matching Functions
; Author: Jonathan Disla
; Date:   02 November 2020
; Description: Logical error handling
;===========================================
*/

/**
* header: constant that holds the import from disla-header.js file
* console.log: logs the function from the disla-header.js file
*/
const header = require("../disla-header.js");
console.log(header.display("Jonathan", "Disla", "Assignment 2.4"));

/*
===============================================
BEGIN ASSINGMENT
===============================================
*/

//===================== Step 1=======================

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

//Testing the output of this function
console.log(match("\n one", "One"));
console.log(match(1, 1))

//=====================Step 2=======================

//this function takes two paramters and logs them along with some string
function logMismatch(c, d){
  console.log("\n " + c + " and " + d + " do not match!");
}

//=====================Step 3=======================

//this function takes two paramters and logs them along with some string
function logMatch(e, f){
  console.log("\n " + e + " and " + f + " do match!");
}

//=====================Step 4=======================

//Variables to compare

let local1 = "Truck";
let local2 = "Car";
let local3 = "Bike";
let local4 = "Bike";
let local5 = "Four";
let local6 = "Three";

//=====================Step 5=======================

//If statements checking each variable above match the next
if(match(local1, local2)){
  logMatch(local1, local2);
}else{
  logMismatch(local1, local2)
}

//This statement matches since both variables are Bike
if(match(local3, local4)){
  logMatch(local3, local4);
}else{
  logMismatch(local3, local4)
}

if(match(local5, local6)){
  logMatch(local5, local6);
}else{
  logMismatch(local5, local6)
}
