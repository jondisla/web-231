/*
============================================
; Title:  Exercise 5.2 - Built-in Functions
; Author: Jonathan Disla
; Date:    November 22 2020
; Description: Use a built in function to
; iterate over the array
;===========================================
*/

/**
* header: constant that holds the import from disla-header.js file
* console.log: logs the function from the disla-header.js file
*/
const header = require("../disla-header.js");
console.log(header.display("Jonathan", "Disla", "Exercise 5.2"));

/*
===============================================
BEGIN ASSIGNMENT
===============================================
*/

//This array holds five elements which are strings of movies
let favFood = ["Pizza", "Flautas", "Hamburger", "Hot Dogs", "Pasta"];

//Below is a built in function to iterate over all the elements of the favMovie array
favFood.forEach(function(food){
  //the parameter iterative value food is outputted
  console.log(food)
})
