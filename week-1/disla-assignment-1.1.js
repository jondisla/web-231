/* ============================================ 
; Title: Assignment 1.1
; Author: Jonathan Disla
; Date: 19 October 2020
; Modified By: Jonathan Disla
; Description: This program demonstrates the ; use of JavaScript types, values, and
; and variables in an application. 
;=========================================== */

//Below is an object with two properties, greeting and date.

/*Expected output:
A string that says: "Hello John today is (current date)"
*/

user = "John"
var info : {
    greeting: "Hello " + user,
    date: new Date()
}

console.log(topInfo.greeting + " today is " + topInfo.date);