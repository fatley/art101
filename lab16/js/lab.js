/*
   lab.js - Using XKCD API, importing comics into our webpage.

   Requirements: jQuery must be loaded for this script to work.

   Author: Ashley Pham
   Date: December 4, 2023
*/


$(document).ready(function() {
  let currentComicNumber = null;

  $("#get-em").click(function(){
      fetchComic('https://xkcd.com/614/info.0.json');
  });

  $("#next").click(function(){
      if (currentComicNumber !== null) {
          currentComicNumber++;
          fetchComic(`https://xkcd.com/${currentComicNumber}/info.0.json`);
      }
  });

  $("#prev").click(function(){
      if (currentComicNumber !== null && currentComicNumber > 1) {
          currentComicNumber--;
          fetchComic(`https://xkcd.com/${currentComicNumber}/info.0.json`);
      }
  });

  function fetchComic(url) {
      const ajaxParams = {
          url: url,
          type: "GET",
          dataType: "json",
          success: ajaxSuccess,
          error: ajaxError
      }

      $.ajax(ajaxParams);
  }

  function ajaxSuccess(comicObj){
      console.log("Here's what I got:", comicObj);
      const title = comicObj.title;
      const imageURL = comicObj.img;
      const imageALT = comicObj.alt;
      currentComicNumber = comicObj.num;
      const desc = comicObj.transcript;

      //jQuery
      $("#output").empty();
      $("#output").append("<h2>" + currentComicNumber + ": " + title); 
      $("#output").append("<img src ='" + imageURL + "'title ='"+ imageALT + "'>"); //image + alt text
      $("#output").append("<p>" + desc); //A man with a beret and a woman are standing on a boardwalk, leaning on a handrail...
  }

  function ajaxError(request,error){
      console.log("Oops:", request, error);
  }
});