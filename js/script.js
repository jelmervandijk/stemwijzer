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
           pro.classList.add("hidden");
           ambivalent.classList.add("hidden");
           contra.classList.add("hidden");
           skip.classList.add("hidden");
           titel.classList.add("show");
           var text = "";
           for (i = 0; i < subjects.length; i++) {
           	text +=  subjects[i].title + "<br>";
           }
          document.getElementById("important").innerHTML = text;

       }

}

function questions() {
      counter++;
        title.innerHTML = subjects[counter].title;
        statement.innerHTML = subjects[counter].statement;
}

function goBack() {
	counter--
	title.innerHTML = subjects[counter].title;
	statement.innerHTML = subjects[counter].statement;
}

function goHome() {
	if (counter == 0) {
		start.classList.add("show"); 
		backImg.classList.add("hidden");
		answerbox.style.visibility = "hidden";

	}
}




