var h1El = document.querySelector("#butts")
var startQuizEl = document.querySelector("#startQuiz")
var paragraphEl = document.querySelector("#paragraph")
var testEl = document.querySelector("#testForm")
var formEl = document.querySelector(".form")

function iDunno(){
    formEl.setAttribute("style", "display:none");
}
startQuizEl.addEventListener("click", function(){
    h1El.style.display = 'none';
    // h1El.textContent = "TESTTTTTTT";
    paragraphEl.textContent = null;
    startQuizEl.setAttribute("style", "display:none");
    testEl.setAttribute("style", "display:flex")
})

// function formHider(testEl){
//     if (testEl.style.display === 'none') {
//         // 👇️ this SHOWS the form
//         testEl.style.display = 'flex';
//       } else {
//         // 👇️ this HIDES the form
//         testEl.style.display = 'none';
//       }  
// }


    // test.setAttribute("style", "display:flex");
    


