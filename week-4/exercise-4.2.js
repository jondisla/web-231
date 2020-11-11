/*
============================================
; Title:  Exercise 4.2 Arrays
; Author: Jonathan Disla
; Date:   12 November 2020
; Description:
;===========================================
*/

/**
* header: constant that holds the import from disla-header.js file
* console.log: logs the function from the disla-header.js file
*/
const header = require("../disla-header.js");
console.log(header.display("Jonathan", "Disla", "Exercise 4.2"));

/*
===============================================
BEGIN ASSIGNMENT
===============================================
*/

//The fruits array contains string elements of fruits
let fruits = ['Apple', 'Orange', 'Banana', 'Mango', 'Pear'];

//This getFruit function takes in an arr paramenter
function getFruit(arr){

/*The following loop iterates over the arr paramenter as an array
* assigns fruits as fruit and logs the fruit parameter
*/
  arr.forEach(fruit => {
    console.log(fruit)
  });
}

//Calling the getFruit function passing in the fruits array
getFruit(fruits)
