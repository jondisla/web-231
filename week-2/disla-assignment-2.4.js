/*
  Hello my name is <your actual name goes here>!

  Today's date is <today's date> and the current temperature is <33.6 - use the formatNumber function> degrees.

  I am <your actual age - parsed int value> years old and my savings account goal is <your actual goal - parsed float value> dollars.

*/

/*
============================================
; Title:  Function Properties
; Author: Jonathan Disla
; Date:   29 October 2020
; Description: Displays my first name and last name
;===========================================
*/

/**
* header: constant that holds the import from disla-header.js file
* console.log: logs the function from the disla-header.js file
*/

const header = require("../disla-header.js");
console.log(header.display("Jonathan", "Disla", "Assignment 2.4"));

//the fullName function displays my first and last name
function fullName(firstName, lastName){
  //statement returns the first and lastname parameters in a sentence.
  return "Hello my name is " + firstName + " " + lastName + "!";
}
//log the contents of the function and assign values to both parameters.
console.log(fullName("Jonathan", "Disla"))

function dateWriter(year, month, day){
  return "Today's date is " + new Date().toLocaleDateString('en-US');
}
console.log(dateWriter())

function formatNumber(number, numOfFixedPositions){

}

function convertToInt(string){
  return parseInt(string);
}
console.log(convertToInt("34"));

function convertToFloat(string){
  return "$" + parseFloat(string);
}
console.log(convertToFloat("999.00"));
