// index.js - Lab 9 JS file - dealing w/ libraries and jquery
// Author: Ashley Pham
// Date: Nov 6, 2023

$(document).ready(function() {
  $('.challenge').click(function() {
      var challengeText = 'The challenge of this lab to to understand JavaScript libraries and to practice using them.'; // Replace this with the actual challenge text
      var newParagraph = $('<p></p>').text(challengeText);
      $(this).parent().append(newParagraph);
  });
});

$(document).ready(function(){
  $('.problem').click(function(){
    var problemText = 'Some of the issues we ran into was trying to get the button to display the text. It is a bit confusing at first, but by initializing the text, and a new paragraph variable, we are able to use the append() function to add the paragraph after the user clicks the button.';
    var newParagraph = $('<p></p>').text(problemText);
    $(this).parent().append(newParagraph);
  });
});

$(document).ready(function(){
  $('.reflection').click(function(){
    var reflectionText = 'This lab showed me how important JS libraries can be. Different libraries can help with modularization and help with readability. It is a little overwhelming to learn all the content in the different libraries, but it is important to know how to use them.';
    var newParagraph = $('<p></p>').text(reflectionText);
    $(this).parent().append(newParagraph);
  })
});

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
