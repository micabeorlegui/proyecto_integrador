let apiKey = 'd4da6f83d8fa5dad990cafe88cb4fbf7'
let urlparams = new URLSearchParams(location.search);
let qsIdGenero = urlparams.get('id');
let DiscoverEndpointPelis = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es&page=1&sort_by=popularity.desc`;
let DiscoverEndpointSeries = `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=es&page=1&sort_by=popularity.desc`;
let detailGenresPelis = `${DiscoverEndpointPelis}?api_key=${apiKey}&with_genres=${qsIdGenero}`;
let detailGenresSeries = `${DiscoverEndpointSeries}?api_key=${apiKey}&with_genres=${qsIdGenero}`;

fetch(detailGenresPelis)
	.then(function(response){
	return response.json();
})
	.then(function(data){
	console.log(data);
    
})
	.catch(function(error){
	console.log('El error es: ' + error);
})

fetch(detailGenresSeries)
	.then(function(response){
	return response.json();
})
	.then(function(data){
	console.log(data);
    
})
	.catch(function(error){
	console.log('El error es: ' + error);
})