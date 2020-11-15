/*
============================================
; Title:  Exercise 4.3 Arrays
; Author: Jonathan Disla
; Date:   15 November 2020
; Description: Log selected items from the array
; using a function
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

//array of 5 vehicles
let vehicles = ['Car', 'Truck', 'Motorcycle', 'Airplane', 'Bus'];

//The getValue function takes two parameters
function getValue(arr, str){
  for (let i = 0; i < arr.length; i++) {
    if(str === arr[i]){
      console.log(arr[i])
    }
  }
}

console.log("-- DISPLAYING ARRAY ITEMS --");
for (let x = 0; x < vehicles.length; x++) {
  console.log(vehicles[x])
}

console.log("");
console.log("-- SELECTED VALUE --")

getValue(vehicles, "Motorcycle");

console.log("  -- SELECTED VALUE --")

getValue(vehicles, "Bus");
