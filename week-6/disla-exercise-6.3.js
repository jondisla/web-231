/*
============================================
; Title:  Exercise 6.3 - Object Literals
; Author: Jonathan Disla
; Date:    November 28 2020
; Description:
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

let ticket = {
  id: 101,
  name: "Help Desk Support",
  requester: "Bob Jones",

  get fullTicket(){
    return "{id: " + this.id + ", name: " + this.name + ", requester: " + this.requester+ "}";
  },

  set fullTicket(val){
    this.fullTicket = val;
  }
}

console.log(ticket.fullTicket)
