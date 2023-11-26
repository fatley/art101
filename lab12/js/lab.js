/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Ashley Pham
   Date: Nov 25 2023
*/

function FizzBuzz(maxNumber, factors) {
  var output = "";
  for (let i = 1; i <= maxNumber; i++) {
    // Start a new column every 20 numbers
    if (i % 20 == 1) {
      output += '<div class="column">';
    }

    output += i + " - ";
    let found = false;

    for (let j = 0; j < factors.length; j++) {
      if (i % factors[j].factor == 0) {
        output += factors[j].text;
        found = true;
      }
    }

    output += found ? '!<br>' : '<br>';

    // End the column every 20 numbers
    if (i % 20 == 0) {
      output += '</div>';
    }
  }
  // Close the last column if it wasn't closed inside the loop
  if (maxNumber % 20 != 0) {
    output += '</div>';
  }
  return output;
}

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