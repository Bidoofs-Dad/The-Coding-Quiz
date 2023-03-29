var startQuizEl = document.querySelector("#startQuiz")
var paragraphEl = document.querySelector("#paragraph")
var testEl = document.querySelector("#testForm")
var testEl2 = document.querySelector("#testForm2")
var testEl3 = document.querySelector("#testForm3")
var testEl4 = document.querySelector("#testForm4")
var testEl5 = document.querySelector("#testForm5")
var formEl = document.querySelector(".form")
var uhhEl = document.querySelector("#uhh")
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

// startQuizEl.addEventListener("click", function(){
//     h1El.style.display = 'none';
//     // h1El.textContent = "TESTTTTTTT";
//     paragraphEl.textContent = null;
//     startQuizEl.setAttribute("style", "display:none");
//     testEl.setAttribute("style", "display:flex")
    
// })
startQuizEl.addEventListener("click", function(){
    testTimer = setInterval(timerFunction, 1000);
})

function show(param_div_id) {
    document.getElementById('uhh').innerHTML = document.getElementById('question1').innerHTML;
    testEl.style.display = 'flex';
}

function show1(param_div_id) {
    document.getElementById('question1').innerHTML = document.getElementById('question2').innerHTML;
    testEl2.style.display = 'flex';
    // if (wrongAnswerEl){
    //     timerCount = timerCount - 10;
    // }
}

function show2(param_div_id) {
    document.getElementById('question2').innerHTML = document.getElementById('question3').innerHTML;
    testEl3.style.display = 'flex';
}

function show3(param_div_id) {
    document.getElementById('question3').innerHTML = document.getElementById('question4').innerHTML;
    testEl4.style.display = 'flex';
}

function show4(param_div_id) {
    document.getElementById('question4').innerHTML = document.getElementById('question5').innerHTML;
    testEl5.style.display = 'flex';
}

function show5(param_div_id) {
    document.getElementById('question5').innerHTML = document.getElementById('results').innerHTML;
    resultsEl.style.visibility = 'visible';
    initialsEl.style.display = 'flex';
    document.getElementById('question5').style.display = 'none';
    clearInterval(testTimer);
    paragraphEl.textContent = "Your final score is " + timerCount + "!";
}

function show6(param_div_id) {
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

//   function show(param_div_id) {
//     document.getElementById('form1').innerHTML = document.getElementById('form').innerHTML;
//     testEl.style.display = 'flex';
//     testEl2.style.display = 'none';
//   }



    // test.setAttribute("style", "display:flex");
    


