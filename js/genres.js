let apiKey= "d4da6f83d8fa5dad990cafe88cb4fbf7"
let urlGenerosPeliculas= `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=es`
fetch(urlGenerosPeliculas)
	.then(function(response){
	return response.json();
})
	.then(function(data){
	console.log(data);
    
})
	.catch(function(error){
	console.log('El error es: ' + error);
})
