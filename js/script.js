var eens = document.getElementById('eens');
var test = document.getElementById('testtekst')
var lock = document.getElementById('lock');
var eye = document.getElementById('eye');
var imgLogo = document.getElementById('imglogo');
var textlogo = document.getElementById('texttitel');
var neutraal = document.getElementById('neutraal');
var oneens = document.getElementById('oneens');
var container = document.getElementById('container');
var titel = document.getElementById('')
var h2 = document.getElementById('');
var start = document.getElementById('start');
var counter = 0;
var answers = [];
start.addEventListener("click", function(){
	imglogo.style.visibility ="hidden";
	test.style.visibility ="hidden";
	textlogo.style.visibility ="hidden";
	eye.style.visibility ="hidden";
	start.style.display ="none";
	start.style.visibility ="hidden";
	lock.style.visibility ="hidden";
	eens.style.visibility ="visible";
	oneens.style.visibility="visible";
	neutraal.style.visibility="visible";	
})

