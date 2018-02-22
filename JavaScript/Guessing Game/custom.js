
var secretNumber = 4;
var guess = Number(prompt("Guess a number"));

if (guess === secretNumber) {

	alert("true dat");
}

else if (guess > secretNumber) {

	alert("You've guessed too high!");
}

else {

	alert("You've guessed too low!");
}