
function isEven(num) {

	return num % 2 === 0;
}

//=========================================

function factorial(num1) {

	var result = 1;

	for(var i = 2; i <= num1; i++) {

		result*= i;
	}
	return result;
}

//=========================================

function kebabToSnake(str) {

	var newStr = str.replace(/-/g, "_");
	return newStr;
}








