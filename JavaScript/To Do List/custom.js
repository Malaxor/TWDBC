
var question = prompt("What would you like to do?");
var toDoArray = [];

while(question !=="quit") {

	if(question === "new") {

		newToDo();
	}
	else if(question === "list") {

		listToDos();
	}
	else if(question === "delete") {

		deleteToDo();
	}
	question = prompt("What would you like to do?");
};


function newToDo() {

	var answer = prompt("Type a new todo item");
	toDoArray.push(answer);
	console.log(`${answer} was added to the list`);	
};

function listToDos() {

	console.log("=========================================");
	toDoArray.forEach(function(toDo, index) {
		console.log(index + ": "  + toDo);
	});
	console.log("=========================================");
};

function deleteToDo() {

	var index = prompt("Enter the index of the todo list item?");

	var item = toDoArray.splice(index,1);
	console.log(item + " has been removed from the list");
};

