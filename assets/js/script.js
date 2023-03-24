var h1El = document.querySelector("#butts")
var startQuizEl = document.querySelector("#startQuiz")
var paragraphEl = document.querySelector("#paragraph")
var testEl = document.querySelector("#testForm")

function iDunno(){
    document.getElementById("testForm").style.visibility = "hidden";
}
startQuizEl.addEventListener("click", function(){
    h1El.textContent = "TESTTTTTTT";
    paragraphEl.textContent = null;
    startQuizEl.setAttribute("style", "display:none");
    
    
})
    // test.setAttribute("style", "display:flex");
    


