/*
============================================
; Title:  Exercise 5.4 - Filterint/Reducing Complex Data Structures
; Author: Jonathan Disla
; Date:    November 22 2020
; Description: Map over the array object and
; filter by rating and genre
;===========================================
*/

/**
* header: constant that holds the import from disla-header.js file
* console.log: logs the function from the disla-header.js file
*/
const header = require("../disla-header.js");
console.log(header.display("Jonathan", "Disla", "Exercise 5.4"));

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

console.log("-- COMPOSER BY RATING --");

//map over the array like object and return
//the rating and the composer's last name
let sortByRating = composers.map(function(comp){
  return "Rating: " + comp.rating + "\n" + "Composer: " + comp.lastName + "\n";
})

//The forEach loops over the new mapped array and outputs
//the returned value
sortByRating.forEach(function(composers){
  console.log(composers)
});

console.log("-- COMPOSER BY GENRE --");

//map over the array like object and return
//the genre and the composer's last name
let sortByGenre = composers.map(function(gen){
  return "Genre: " + gen.genre + "\n" + "Composer: " + gen.lastName + "\n";
})

//The forEach loops over the new mapped array and outputs
//the returned value`
sortByGenre.forEach(function(comp){
  console.log(comp);
})
