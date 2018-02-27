
var colors = ["blue", "teal", "black", "green", "yellow"];

function myForEach(arr, func) {

	for(var i = 0; i < arr.length; i++) {

		func(arr[i]);
	}	
}

// myForEach(colors, alert);

myForEach(colors, function(color){

	alert("Hi, " + color);
});