// index.js - Lab 8 JS file - dealing w/ functions and callbacks
// Author: Ashley Pham
// Date: Nov 6, 2023

// Constants

// Functions
function mathing(x) {
  return Math.sqrt(x);
}

console.log("The square root of 25 is ", mathing(25));
console.log("The square root of 121 is ", mathing(121));
console.log("The square root of 81 is ", mathing(81));

var arrayNum = [1, 2, 3, 4, 5, 6, 7,];
console.log("My array: ", arrayNum);

console.log("The square root of my array is: ", arrayNum.map(mathing));


var result = arrayNum.map(function(x) {
  return x * x;
})
console.log("My array squared is: ", result);


function main() {
  console.log("Main function started.");
  // using get element ID to print arrayNum, results, and mathing
  document.getElementById("array").innerHTML = "My array: " + arrayNum;
  document.getElementById("squared").innerHTML = "My array squared is: " + result;
  document.getElementById("squareRoot").innerHTML = "The square root of my array is: " + arrayNum.map(mathing);
}

// let's get this party started
window.onload = main;