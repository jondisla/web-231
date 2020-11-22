/*
============================================
; Title:  Exercise 5.3 - Object Collections
; Author: Jonathan Disla
; Date:    November 22 2020
; Description: Use array like object to create
; objects inside the array and iterate over
; array using foreach loop
;===========================================
*/

/**
* header: constant that holds the import from disla-header.js file
* console.log: logs the function from the disla-header.js file
*/
const header = require("../disla-header.js");
console.log(header.display("Jonathan", "Disla", "Exercise 5.3"));

/*
===============================================
BEGIN ASSIGNMENT
===============================================
*/

/*The composer array contains five objects with
; corresponding key value pairs
*/
let composers = [
  {
    firstName: "Ludwig van",
    lastName: "Beethoven",
    genre: "Classical",
    rating: "8"
  },
  {
    firstName: "Wolfgang Amadeus",
    lastName: "Mozart",
    genre: "Classical",
    rating: "10"
  },
  {
    firstName: "Johann Sebastian",
    lastName: "Bach",
    genre: "Classical",
    rating: "9"
  },
  {
    firstName: "Joseph",
    lastName: "Haydn",
    genre: "Classical",
    rating: "6"
  },
  {
    firstName: "Franz",
    lastName: "Schubert",
    genre: "Classical",
    rating: "5"
  }
]

//Log a title of composers
console.log("-- COMPOSERS --");

/*This forEach loop iterates over the composers array
; then the anonymous function has the composer parameter
*/
composers.forEach(function(composer){
  //This console.log uses dot notation to access each object in the object array
  console.log("Last Name: " + composer.lastName + ", Genre: " + composer.genre + ", Rating: " + composer.rating);
})
