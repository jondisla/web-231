/*
============================================
; Title:  Exercise 4.4 Filtering
; Author: Jonathan Disla
; Date:   15 November 2020
; Description: Log all the cities in the array
; to the console as well as a sorted array
; and logs a selected city with a function
;===========================================
*/

/**
* header: constant that holds the import from disla-header.js file
* console.log: logs the function from the disla-header.js file
*/
const header = require("../disla-header.js");
console.log(header.display("Jonathan", "Disla", "Exercise 4.4"));

/*
===============================================
BEGIN ASSIGNMENT
===============================================
*/

//The states array holds five elements with state names
let states = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"];

//The following function has two paramaters
function getStates(array, city){
  //a for loop that iterates over the array parameter
  for (let k = 0; k < array.length; k++) {
    //this if statement checks if the state typed is
    //the state in the array
    if (city === array[k]) {
      console.log(array[k])
    };

  }
}

console.log("-- ORIGINAL ARRAY --");
//This for loop prints out all the elements in the states array
for (let i = 0; i < states.length; i++) {
  console.log(states[i])
}

console.log("");
console.log("-- SORTED ARRAY --");

//This for loop iterates over the states array
//then logs the elements sorted alphabetically
for (let i = 0; i < states.length; i++) {
  console.log(states.sort()[i]);
}

console.log("");
console.log("-- SELECTED VALUE --");

//uses the getStats function
//checks in the states array for the element city
getStates(states, "Iowa")
