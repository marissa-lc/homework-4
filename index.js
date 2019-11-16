

$(document).ready(function(){
    
    $("#start").click(function(){
        $("div").remove("");
      });

//Code should go here

  //Store the total number of questions
  var totalQuestions = $('.questions').size(6);

  //Set the current question to display to 1
  var currentQuestion = 1;
  
  //Store the selector in a variable.
  //It is good practice to prefix jQuery selector variables with a $
  $questions = $('.questions');
  
  //Hide all the questions
  $questions.hide();
  
  //Show the first question
  $($questions.get(currentQuestion)).fadeIn();
  
  //attach a click listener to the HTML element with the id of 'next'
  $('#next').click(function () {
  
       //fade out the current question,
       //putting a function inside of fadeOut calls that function 
       //immediately after fadeOut is completed, 
       //this is for a smoother transition animation
       $($questions.get(currentQuestion)).fadeOut(function () {
  
          //increment the current question by one
          currentQuestion = currentQuestion + 1;
  
          //if there are no more questions do stuff
          if (currentQuestion == totalQuestions) {
  
              var result = sum_values()
  
              //do stuff with the result
              alert(result);
  
          } else {
  
              //otherwise show the next question
              $($questions.get(currentQuestion)).fadeIn();
  
          }
      });
  
  });









  });





// Store your questions as an array of objects in a separate file, `questions.js`, that follows this format:

// // var questions = [
//   {
//     title: "Commonly used data types DO NOT include:",
//     choices: ["strings", "booleans", "alerts", "numbers"],
//     answer: "alerts"
//   },
//   {
//     title: "The condition in an if / else statement is enclosed within ____.",
//     choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
//     answer: "parentheses"
//   },
//   ///etc.
// ];