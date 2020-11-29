/*
============================================
; Title:  Exercise 6.2 - exception-handling.js
; Author: Jonathan Disla
; Date:    November 28 2020
; Description: Demonstrates how to create a try/catch/finally block
;===========================================
*/

/**
* header: constant that holds the import from disla-header.js file
* console.log: logs the function from the disla-header.js file
*/
const header = require("../disla-header.js");
console.log(header.display("Jonathan", "Disla", "Exercise 6.2"));

/*
===============================================
BEGIN ASSIGNMENT
===============================================
*/

try{
  let password = "mypwd";
  let passln = password.length;

  if (passln < 8) throw "Password length is too short";
    console.log(password)
}catch(err){
  console.log("Catch Clause: " + err)
}finally{
  console.log('Finally clause: End of program...')
}
