/*
============================================
; Title:  Exercise 6.4 - Nested Object Literals
; Author: Jonathan Disla
; Date:    November 28 2020
; Description: Accessing nested object literals
;===========================================
*/

/**
* header: constant that holds the import from disla-header.js file
* console.log: logs the function from the disla-header.js file
*/
const header = require("../disla-header.js");
console.log(header.display("Jonathan", "Disla", "Exercise 6.4"));

/*
===============================================
BEGIN ASSIGNMENT
===============================================
*/

//Ticket object stores ticket and department information
let ticket = {
  id: 105,
  name: "Ticket Name",
  dateCreated: new Date().toLocaleDateString(),
  priority: 2,
  //nested object literal for the name of the person the ticket belongs to
  person: {
    id: 1,
    firstName: "Bob",
    lastName: "Jones",
    jobTitle: "Programmer I"
  }
}

//log the contents of the ticket using [] instead of dot notation to access the values in the nested object literal.
console.log("Ticket " + ticket["id"] + " was created on " + ticket["dateCreated"] + " and assigned to employee " + ticket["person"]["firstName"] + " " + ticket["person"]["lastName"] + " (" + ticket["person"]["jobTitle"] + "). " )
