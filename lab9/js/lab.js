// index.js - Using jQuery, create buttons to add to the challenge, problems, and results sections of your document
// Author: Michelle Wang
// Date:11/6/2023

// Add toggle class button to challenge
// $("#challenge").append("<button id='lab-toggle-button'>Click Here!<button>");

// // Add a click listener to the toggle Class button
// $("#lab-toggle-button").click(function(){
//     $("#challenge").toggleClass(".special");
//     //result when clicked
//     $("#challenge").html("Congrats! You clicked it!")
// });

//add toggle class button to problem
//$


// ==========================================================================================


// DRY principle ------ DONT REPEAT YOSELF

$("#challenge, #problems, #results").addClass("special-sections");

$(".special-sections").append("<button class='toggle-button'>Click Here!</button>");

$(".special-sections button").click(function(){
    var sectionId = $(this).parent().attr('id');
    var paragraphText = "";

    if (sectionId === "challenge") {
        paragraphText = "The challenge of the lab was to experiment with jQuery and make buttons that have an action when clicked.";
    } else if (sectionId === "problems") {
        paragraphText = `Some problems that came up was getting the buttons to do something. I managed to get challenge to click and then show a message.
        For the other buttons I decided to change the color of the section similar to the professor's website "highlight". This proved difficult at
        first but after looking over the JS and understanding how it works, it was easier. I also decided to try doing a collapsible button for one of my
        sections and used W3schools to incorporate it into my code.`;
    } else if (sectionId === "results") {
        paragraphText = "You can see the results if you click the button that says 'Click Here' in the challenge section. I also decided to change the section backgrounds to test out other button functions.";
    }

    // Append a new paragraph to the parent section when clicked
    $(this).parent().append("<p>" + paragraphText + "</p>");
});