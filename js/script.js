var start = document.getElementById('start');
var answerbox = document.getElementById('answerbox');
var counter = 0;
var answers = [];


start.addEventListener("click", function(){
	start.classList.add("hidden"); 
	backImg.classList.add("show");
	answerbox.style.visibility = "visible";
	title.innerHTML = subjects[0].title;
	statement.innerHTML = subjects[0].statement;
})


pro.addEventListener("click", function() {
	endScreen();
	answers.push("pro");
	questions();
})

contra.addEventListener("click", function() {
	endScreen();
	answers.push("contra");
	questions();
})
ambivalent.addEventListener("click", function() {
	endScreen();
	answers.push("ambivalent");
	questions();
})

skip.addEventListener("click", function() {
	endScreen();
	answers.push("neither");
	questions();
})

function endScreen() {
    if (counter == 7) {
           answerbox.classList.add("hidden");
           title.classList.add("hidden");
           statement.classList.add("hidden");
       }
}
function questions() {
      counter++;
        document.getElementById('title').innerHTML = subjects[counter].title;
        document.getElementById('statement').innerHTML = subjects[counter].statement;
}