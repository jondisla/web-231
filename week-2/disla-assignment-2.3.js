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
console.log(header.display("Jonathan", "Disla", "Assignment 2.3"));

/*The below function property assigns the string Jonathan to the function myName and
*the object jonathan.
*/
myName.jonathan = "Jonathan";

/*The below function myName is declared and returns the property jonathan from
*the object function above.
*/
function myName(){
  return myName.jonathan;
 };

//This console.log funciton outputs my first name coming from the myName function.
console.log("My name is " + myName() + " Disla");
