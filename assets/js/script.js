var h1El = document.querySelector("#butts")
var startQuizEl = document.querySelector("#startQuiz")
var paragraphEl = document.querySelector("#paragraph")
var testEl = document.querySelector("#testForm")
var testEl2 = document.querySelector("#testForm2")
var testEl3 = document.querySelector("#testForm3")
var testEl4 = document.querySelector("#testForm4")
var testEl5 = document.querySelector("#testForm5")
var formEl = document.querySelector(".form")
var uhhEl = document.querySelector("#uhh")
var timerCount = 5;
var timerEl = document.querySelector("#timer");


// startQuizEl.addEventListener("click", function(){
//     h1El.style.display = 'none';
//     // h1El.textContent = "TESTTTTTTT";
//     paragraphEl.textContent = null;
//     startQuizEl.setAttribute("style", "display:none");
//     testEl.setAttribute("style", "display:flex")
    
// })

function show(param_div_id) {
    document.getElementById('uhh').innerHTML = document.getElementById('question1').innerHTML;
    testEl.style.display = 'flex';
}

function show1(param_div_id) {
    document.getElementById('question1').innerHTML = document.getElementById('question2').innerHTML;
    testEl2.style.display = 'flex';
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

startQuizEl.addEventListener("click", function(){
    function timerFunction(){
        timerCount--;
        timerEl.textContent = "Time: " + timerCount;
        if (timerCount===0){
            alert("YA FAILED YA GOOBER!")
            clearTimeout(testTimer)
        }
    }
    
    var testTimer = setInterval(timerFunction, 1000);
})




//   function show(param_div_id) {
//     document.getElementById('form1').innerHTML = document.getElementById('form').innerHTML;
//     testEl.style.display = 'flex';
//     testEl2.style.display = 'none';
//   }



    // test.setAttribute("style", "display:flex");
    


