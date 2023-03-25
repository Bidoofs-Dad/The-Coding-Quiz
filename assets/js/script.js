var h1El = document.querySelector("#butts")
var startQuizEl = document.querySelector("#startQuiz")
var paragraphEl = document.querySelector("#paragraph")
var testEl = document.querySelector("#testForm")
var testEl2 = document.querySelector("#testForm2")
var formEl = document.querySelector(".form")
var uhhEl = document.querySelector("#uhh")


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



//   function show(param_div_id) {
//     document.getElementById('form1').innerHTML = document.getElementById('form').innerHTML;
//     testEl.style.display = 'flex';
//     testEl2.style.display = 'none';
//   }



    // test.setAttribute("style", "display:flex");
    


