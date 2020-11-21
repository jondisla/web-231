/*
============================================
; Title:  Discussion Board 5.1
; Author: Jonathan Disla
; Date: 16 November 2020
; Description: Storing key value pairs using keyed
; collections
;===========================================
*/

/*Expected Output:
checking is currently 734
===============================
savings is currently 7019
===============================
overdrawn is currently false
===============================
*/

//store the Map constructor in the balances variable
let balances = new map();
//using set(), assign elements to the array
balances.set('checking', 734);
balances.set('savings', 7019);
balances.set('overdrawn', false);

//for of loop to iterate over the keys and values of balances array
for(let [k, v] of balances){
  //check for keys in the  balances array
  if(k){
    console.log(key + " is currently " + v)
    console.log('===============================')
  }else{
    console.log('No values found')
  }
}
