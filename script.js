//quiz//



//timer//

//start quiz//
$(document).ready(function(){
  $("button").click(function(){
    $("#start").hide(1000);
  });
});

// $("#show").click(function(){
// $("p").show();
// });


// // $(document).ready(function(){
    
// //   $("#play").click(function(){
// //       $("play").remove("");
// //     });

// var questions = [    
//   {
//   prompt: "Commonly used data types DO NOT include:",
//   choices: ["strings", "booleans", "alerts", "numbers"],
//   answer: "alerts"
// },
// {
//   prompt: "The condition in an if / else statement is enclosed within ____.",
//   choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
//   answer: "parentheses"
// },

// ];


// var score =0;

// for(var i=0; i < questions.length; i++) {
//   var response = window.prompt(questions[i].prompt);
//   if(response == questions[i].answer){
//     score++;
//     alert("correct!");
//   } 
//     else {
//       alert("oops!");
//     }
// }

// alert("you got " + score + "/" + questions.length);


// // var totalQuestions = $('.questions').size(6);

// // var currentQuestion = 0;

// // $questions = $('.questions');

// // //Hide all the questions
// // $questions.hide();

// // //Show the first question
// // $($questions.get(currentQuestion)).fadeIn();

// // //attach a click listener to the HTML element with the id of 'next'
// // $('#next').click(function () {

// //      $($questions.get(currentQuestion)).fadeOut(function () {

// //         //increment the current question by one
// //         currentQuestion = currentQuestion + 1;

// //         //if there are no more questions do stuff
// //         if (currentQuestion == totalQuestions) {

// //             var result = sum_values()

// //             //do stuff with the result
// //             alert(result);

// //         } else {

// //             //otherwise show the next question
// //             $($questions.get(currentQuestion)).fadeIn();

// //         }
// //     });

// // });

// // });
