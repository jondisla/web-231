/*
============================================
; Title:  Exercise 7.2 - Constructor Functions
; Author: Jonathan Disla
; Date:    December 2 2020
; Description: loop though the constructor objec
; array
;===========================================
*/

/**
* header: constant that holds the import from disla-header.js file
* console.log: logs the function from the disla-header.js file
*/
const header = require("../disla-header.js");
console.log(header.display("Jonathan", "Disla", "Exercise 7.2"));

/*
===============================================
BEGIN ASSIGNMENT
===============================================
*/

//The following constructor is a schema for employees
function Schema(id, firstName, lastName, title){
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
}

//The employees array uses the Schema constructor func
//to assign values to the parameters
var employees = [
  new Schema(1, "Thomas", "Edison", "Software Engineer"),
  new Schema(2, "Benjamin", "Franklin", "Programmer"),
  new Schema(3, "Nikola", "Tesla", "Project Manager"),
  new Schema(4, "Charles", "Babbage", "Product Manager"),
  new Schema(5, "Alexander", "Bell", "Business Analyst"),
];

//Loop over the employees array and output desired information
employees.forEach(function(emp){
  console.log(emp.firstName + " " + emp.lastName + " " + emp.title)
})
