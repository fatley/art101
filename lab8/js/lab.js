// index.js - Lab 8 JS file - dealing w/ functions and callbacks
// Author: Ashley Pham
// Date: Nov 6, 2023

// Constants

// Functions

// square root func
function mathing(x) {
  return Math.sqrt(x);
}

// print satements
console.log("The square root of 25 is ", mathing(25));
console.log("The square root of 121 is ", mathing(121));
console.log("The square root of 81 is ", mathing(81));

// intializnig array of nums
var arrayNum = [1, 2, 3, 4, 5, 6, 7,];
console.log("My array: ", arrayNum);

// using map to get square root of array
console.log("The square root of my array is: ", arrayNum.map(mathing));

// using map to get square of array
var result = arrayNum.map(function(x) {
  return x * x;
})
console.log("My array squared is: ", result);


// bonus task
function main() {
  console.log("Main function started.");
  // using get element ID to print arrayNum, results, and mathing
  document.getElementById("array").innerHTML = "My array: " + arrayNum;
  document.getElementById("squared").innerHTML = "My array squared is: " + result;
  document.getElementById("squareRoot").innerHTML = "The square root of my array is: " + arrayNum.map(mathing);
}


// We started this lab early so if we ran into any obstacles or challenges, we would have a bigger window to solve the problem. This lab was pretty straightfoward
// because we've been doing many practices in class. We did have some syntax errors because we were just being careless, however we managed to clean up
// our code and get it to work. Also, the bonus task was a bit of a challenge at first. We had to look up what getElementById() was and how to use it. 
// Eventually, by using window.onload, we were able to get the bonus task to work. Overall, this lab was pretty easy and we were able to finish it in a timely manner.

// let's get this party started
window.onload = main;