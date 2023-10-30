// index.js - purpose and description here
// Author: Ashley Pham
// Date: OCT 27,

// Constants
// My transportation 
myTransportation = ["legs", "car"];
myRide = {
  make: "Tesla", 
  model: "3", 
  color: "black",  
  year: 2018, 
  age: function() {
    return 2023 - this.year;
  }

};

// output for my rides
document.writeln("Getting around: " + myTransportation + "<br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myRide, null, '\t'), "</pre>");

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();