
var p1 = document.querySelector("#p1");
var p2 = document.getElementById("p2");
var resetBtn = document.getElementById("reset");
var input = document.querySelector("input");

var p1Display = document.querySelector("#scoreP1");
var p2Display = document.querySelector("#scoreP2");
var winScore = document.querySelector("p span");

var p1Score = 0;
var p2Score = 0;

var gameOver = false;
var winningScore = 5;


p1.addEventListener("click", function() {

	if(!gameOver) {

		p1Score++;
		p1Display.textContent = p1Score;

		if(p1Score === winningScore) {
			gameOver = true;
			p1Display.classList.add("winner");	
		}
	}
});

p2.addEventListener("click", function() {

	if(!gameOver) {

		p2Score++;
		p2Display.textContent = p2Score;

		if(p2Score === winningScore) {
			gameOver = true;
			p2Display.classList.add("winner");
		}	
	}
});

resetBtn.addEventListener("click", function() {

	reset();
});

input.addEventListener("change", function() {

	winScore.textContent = this.value;
	winningScore = Number(this.value);
	reset();
});


function reset() {

	p1Score = 0;
	p2Score = 0;

	p1Display.textContent = 0;
	p2Display.textContent = 0;

	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");

	gameOver = false;
}