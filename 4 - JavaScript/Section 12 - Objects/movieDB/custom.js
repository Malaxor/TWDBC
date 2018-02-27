
var movies = [
	{
		title: "The Matrix",
		rating: 5,
		hasWatched: true
	},
	{
		title: "Frozen",
		rating: 4,
		hasWatched: false
	},
	{
		title: "Hateful 8",
		rating: 5,
		hasWatched: true
	},
	{
		title: "Le Miserables",
		rating: 3,
		hasWatched: false
	}
]

for(i = 0; i < movies.length; i++) {

	if(movies[i].hasWatched) {

		console.log(`You have seen "${movies[i].title}": ${movies[i].rating} stars`)
	}
	else {

		console.log(`You have not seen "${movies[i].title}": ${movies[i].rating} stars`)
	}
}