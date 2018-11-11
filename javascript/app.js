/* **[Click Here to Watch the Demo](https://youtu.be/fBIj8YsA9dk)**.

* You'll create a trivia form with multiple choice or true/false options (your choice). if/else RETURN FALSE, TRUE

* The player will have a limited amount of time to finish the quiz. SETTIMEOUT(), 

  * The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly. .END() ALERT (TEXT + VAR CORRECT= 0 + VAR INCORR = 10;...)

* Don't let the player pick more than one answer per question.  ?? SETINTERVAL()

* Don't forget to include a countdown timer.

### Option Two: Advanced Assignment (Timed Questions)

![Advanced](Images/2-advanced.jpg)

**[Click Here to Watch the demo](https://youtu.be/xhmmiRmxQ8Q)**.

* You'll create a trivia game that shows only one question until the player answers it or their time runs out.

* If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.

* The scenario is similar for wrong answers and time-outs.

  * If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
  * If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.

* On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page). */
//declare a starting variable for the clock
var timer = 90;
var scoreTotal = 0;
//var numerRight;
//var numberWrong;
//var currentQuestion;
//var timeToGuess;
var hola;
var answers = [];
var answerOne;
var answerTwo;
var library; // a copy of the questions for this game
var questionLength = 10; // seconds you have to guess
var answerLength; // seconds you are shown the answer
var gameLength; // set this to limit tge number or questions per game
console.log("hello");
$(document).ready(function(){

    //setInterval(function(){alert("pau");}, 3000);
    function initialize() {
        /* $(document).ready(function(){
            $(".btn1").click(function(){
                $("p").hide();
            });
            $(".btn2").click(function(){
                $("p").show();
            });
            $("button").click(function(){
    $("div").empty();
}); */
        hola= setInterval(decrement, 1000);
    }
    //create a countdoown function
    function decrement() {
        timer--;
        //populate? the timer value into the HTML
        $(".timer").text(timer + "seconds remaining")
        if (timer === 0) {
            scoreChecker();
        }
    }
    //create function to stop the clock
    function stop() {
        clearInterval(hola);
    }
    $(".submit").on("click", function(){
        scoreChecker();
    });
    // start button whows the body/sumit button, instruccions, starts clock
    $(".start").on("click", function () {
        $(".start").css("display", "none")
       
        $('.triviaBody').css('display', 'inline-block');
        $('.submit').css('display', 'inline-block');
        initialize();
    });

    answerOne = $("input[name=questionOne]:checked").val();
    //answerTwo = $("input[name=questionOne]")

    //create a function to contar/tally up score
    function answersCorrect() {
        //if loops returns string value "correct", increase scoretotal by one
        for (var i = 0; i < answers.length; i++) {
            if (answers[i] === "correct") {
                scoreTotal++;
            }
        }
    }
    function scoreChecker() {
        /* Return the value attribute:
        $(selector).val() */
        debugger;
        answers.push($("input[name=q1]:checked").val());
        answers.push($("input[name=q2]:checked").val());
        answers.push($("input[name=q3]:checked").val());
        answers.push($("input[name=q4]:checked").val());
        answers.push($("input[name=q5]:checked").val());
        stop();
        answersCorrect();
        alert("you scored " + scoreTotal + ' out of 5 correct!');
        scoreTotal = 0;
        console.log(scoreTotal);
    }
});

/* <button onclick="myStopFunction()">Stop time</button>
var myVar = setInterval(myTimer, 1000);

function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("demo").innerHTML = t;
}

function myStopFunction() {
    clearInterval(myVar);
} */
