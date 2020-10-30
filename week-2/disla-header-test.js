/*
============================================
; Title:  disla-header-test.js
; Author: Jonathan Disla
; Date:   29 October 2020
; Modified By: Jonathan Disla
; Description: Displays a formatted header
;===========================================
*/

/**
* header: constant that holds the import from disla-header.js file
* console.log: logs the function from the disla-header.js file
* Description: Returns a well-formatted string header
*/

const header = require("../disla-header.js")

console.log(header.display("Robert", "Frost", "Week 2"));
