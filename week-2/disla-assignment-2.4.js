/*
  Hello my name is <your actual name goes here>!

  Today's date is <today's date> and the current temperature is <33.6 - use the formatNumber function> degrees.

  I am <your actual age - parsed int value> years old and my savings account goal is <your actual goal - parsed float value> dollars.

*/

/*
============================================
; Title:  Function Properties
; Author: Jonathan Disla
; Date:   01 November 2020
; Description: Displays my name, the date, temperature,
; my age and how much money in my savings account.
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

function dateWriter(year, month, day){
  return day + "/" + month + "/" + year
}


function formatNumber(number, numOfFixedPositions){
  return number.toFixed(numOfFixedPositions);
}

function convertToInt(age){
  return parseInt(age);
}

function convertToFloat(savings){
  return "$" + parseFloat(savings);
}

//Invoke the fullName function and give values to parameters to form my name.
console.log("\nHello my name is " + fullName("Jonathan", "Disla"))

//Invoke dateWriter and formatNumber functions and log the date and degrees.
console.log("\nToday's date is " + dateWriter(2020, 11, 01)
  + " and the current temperature is " + formatNumber(33.56, 1) + " degrees.")

//Invoke the converToInt and ConverToFloat functions to form the last sentence.
console.log("\nI am " + convertToInt("34")
  + " years old and my savings account goal is "
  + convertToFloat("999098665.00") + " dollars.");
