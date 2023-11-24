/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Ashley Pham
   Date: Nov 13 2023
*/

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
  // We have to convert our string to an array and back again to sort it
  return inputString.split('').sort().join('');
}

// click listener for button
$("#submit").click(function(){
  const userName = $("#user-name").val();
  userNameSorted = sortString(userName);
  $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});

// creating anagram func
// user inputs string, function returns anagram of string
function anagram(anagramString) {
  // grab each character of the string
  // once user inputs string, create new string with same length
  // grab each character of the string and place in new string
  // randomize the letters in the new string
  // return new string
  let newString = anagramString.split('');
  for (let i = newString.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newString[i], newString[j]] = [newString[j], newString[i]];
  }
  return newString.join('');
}


$("#anagram").click(function(){
  const userAnagram = $("#user-anagram").val();
  const userAnagramAnagram = anagram(userAnagram);
  $("#output-anagram").html('<div class="text"><p>' + userAnagramAnagram + '</p></div>');
});