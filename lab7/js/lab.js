// index.js - purpose and description here
// Author: Ashley Pham
// Date: OCT 30, 2-23

// Constants

// Functions


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