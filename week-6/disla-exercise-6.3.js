/*
============================================
; Title:  Exercise 6.3 - Object Literals
; Author: Jonathan Disla
; Date:    November 28 2020
; Description: Using setters and getters in object
;===========================================
*/

/**
* header: constant that holds the import from disla-header.js file
* console.log: logs the function from the disla-header.js file
*/
const header = require("../disla-header.js");
console.log(header.display("Jonathan", "Disla", "Exercise 6.3"));

/*
===============================================
BEGIN ASSIGNMENT
===============================================
*/

//create a tickets object with getters and setters
let ticket = {
  id: 101,
  name: "Help Desk Support",
  requester: "Bob Jones",

  //this getter gathers all the information and formats it accordingly
  get fullTicket(){
    return "{id: " + this.id + ", name: " + this.name + ", requester: " + this.requester+ "}";
  },

  //the setter sets the value val
  set fullTicket(val){
    this.fullTicket = val;
  }
}

//log the property fullticket of the ticket object
console.log(ticket.fullTicket)
