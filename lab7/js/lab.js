// index.js - purpose and description here
// Author: Ashley Pham
// Date: OCT 30, 2-23

// Constants

// Functions


// Create a new function in your file, call it what you like, but choose wisely.
// In the function, declare a variable userName and use window.prompt() to get the user's name from the user.
// Here's some helpLinks to an external site..
// Sort the letters of the user's name and return those from the function. 
// Hint: You can't sort strings, but you can sort arrays. Can you convert it back and forth?
// Make sure your function uses return to return the results.
// Outside of the function, call the function and output the results with document.writeln() 
// to neatly output the user's sorted name.
// Strings print nicely on your webpage, so you don't have to use JSON.stringify() this time.

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction() {

  // ask users for name
  var userName = window.prompt("What is your name?");

  // sorts the letter of input
  var userArray = userName.split('');

  // sorts the name
  var userArraySort = userArray.sort();

  // combines the name
  var userArrayJoin = userArraySort.join('');

  // return value
  return userArrayJoin;
}

// calling function to get name
var userSortedName = myFunction();
// output for names
document.writeln("Your sorted name is: " + userSortedName + "<br>");

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();