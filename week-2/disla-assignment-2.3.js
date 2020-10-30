/*
============================================
; Title:  Function Properties
; Author: Jonathan Disla
; Date:   29 October 2020
; Description: Displays my first name
;===========================================
*/

/*The "myName" function assigns the string Jonathan to the property jonathan.
*The property is then returned.
*/
function myName(){
  myName.jonathan = "Jonathan"
  return myName.jonathan;
 };
//This console.log funciton outputs my first name coming from the myName fuction.
console.log("My name is " + myName());
