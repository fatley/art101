/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Ashley Pham
   Date: Nov 25 2023
*/

function FizzBuzz(maxNumber, factors) {
  var output = "";
  // iterates from 1 to whatever user inputs
  for (let i = 1; i <= maxNumber; i++) {

    // organizes the results into columns of 20
    if (i % 20 == 1) {
      output += '<div class="column">';
    }

    // adds a "-" if there is a print after number
    output += i + " - ";

    // checks if the number is divisible by any of the factors
    let multipler = false;

    // deals with factors
    // iterates thru the factors and checks if the number is divisible by any of them
    for (let j = 0; j < factors.length; j++) {
      if (i % factors[j].factor == 0) {
        output += factors[j].text;
        multipler = true;
      }
    }

    // adds newline after each number
    output += multipler ? '!<br>' : '<br>';

    // closes the column after 20 numbers
    if (i % 20 == 0) {
      output += '</div>';
    }
  }


  // handles if user input number is not divisible by 20
  if (maxNumber % 20 != 0) {
    output += '</div>';
  }
  return output;
}

// handles max # form
document.getElementById('max-number-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var maxNumber = Number(document.getElementById('max-number').value);
  var factors = [
    {factor: Number(document.getElementById('factor1').value), text: document.getElementById('text1').value},
    {factor: Number(document.getElementById('factor2').value), text: document.getElementById('text2').value},
    {factor: Number(document.getElementById('factor3').value), text: document.getElementById('text3').value}
  ];
  document.getElementById('output').innerHTML = FizzBuzz(maxNumber, factors);
});

// handles factor form
document.getElementById('factors').addEventListener('submit', function(event) {
  event.preventDefault();
  var factors = [
    {factor: Number(document.getElementById('factor1').value), text: document.getElementById('text1').value},
    {factor: Number(document.getElementById('factor2').value), text: document.getElementById('text2').value},
    {factor: Number(document.getElementById('factor3').value), text: document.getElementById('text3').value}
  ];
  var maxNumber = Number(document.getElementById('max-number').value);
  document.getElementById('output').innerHTML = FizzBuzz(maxNumber, factors);
});