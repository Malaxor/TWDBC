
var age = Number(prompt("What's your age"));

if (age < 0) {

	console.log("Error");
}
if (age === 21) {

	console.log("Happy Birthday");
}

if (age % 2 !== 0 ) {

	console.log("Your age is odd...");
}
if (age % Math.sqrt(age) === 0) { 

	console.log("perfect square!")
}