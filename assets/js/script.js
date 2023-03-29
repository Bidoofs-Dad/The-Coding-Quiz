var startQuizEl = document.querySelector("#startQuiz")
var paragraphEl = document.querySelector("#paragraph")
var formEl = document.querySelector("#form1")
var formEl2 = document.querySelector("#form2")
var formEl3 = document.querySelector("#form3")
var formEl4 = document.querySelector("#form4")
var formEl5 = document.querySelector("#form5")
var homeEl = document.querySelector("#home")
var timerCount = 100;
var timerEl = document.querySelector("#timer");
var resultsEl = document.querySelector("#results");
var initialsEl = document.querySelector("#initials");
var testTimer;
var wrongAnswerEl = document.querySelector(".wrongAnswer");
var textAreaEl = document.querySelector("#textArea");
var submitEl = document.querySelector("#submit");
var viewHighScoresEl = document.querySelector("#viewHighScores");
var clearButtonEl = document.querySelector("#clearButton");

startQuizEl.addEventListener("click", function(){
    testTimer = setInterval(timerFunction, 1000);
})

function next(param_div_id) {
    document.getElementById('home').innerHTML = document.getElementById('question1').innerHTML;
    formEl.style.display = 'flex';
}

function next1(param_div_id) {
    document.getElementById('question1').innerHTML = document.getElementById('question2').innerHTML;
    formEl2.style.display = 'flex';
    // if (wrongAnswerEl){
    //     timerCount = timerCount - 10;
    // }
}

function next2(param_div_id) {
    document.getElementById('question2').innerHTML = document.getElementById('question3').innerHTML;
    formEl3.style.display = 'flex';
}

function next3(param_div_id) {
    document.getElementById('question3').innerHTML = document.getElementById('question4').innerHTML;
    formEl4.style.display = 'flex';
}

function next4(param_div_id) {
    document.getElementById('question4').innerHTML = document.getElementById('question5').innerHTML;
    formEl5.style.display = 'flex';
}

function next5(param_div_id) {
    document.getElementById('question5').innerHTML = document.getElementById('results').innerHTML;
    resultsEl.style.visibility = 'visible';
    initialsEl.style.display = 'flex';
    document.getElementById('question5').style.display = 'none';
    clearInterval(testTimer);
    paragraphEl.textContent = "Your final score is " + timerCount + "!";
}

function next6(param_div_id) {
    document.getElementById('results').innerHTML = document.getElementById('highScores').innerHTML;
}

function timerFunction(wrongAnswer){
    if (wrongAnswer){
        timerCount = timerCount - 10;
    }
    else {
        timerCount--;
    }
    timerEl.textContent = "Time: " + timerCount;
    if (timerCount < 1){
        alert("YA FAILED YA GOOBER!")
        clearInterval(testTimer)
    }
}


submitEl.addEventListener("click", function(){
    localStorage.setItem(textAreaEl.value, timerCount);
    textAreaEl.value = " ";
    var highScores = localStorage.getItem(textAreaEl.value)
    var finalTestEl = document.querySelector("#append")

finalTestEl.append(highScores);
})

clearButtonEl.addEventListener("click", function(){
    localStorage.clear()
})

    


