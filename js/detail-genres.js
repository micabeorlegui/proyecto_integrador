let apiKey = 'd4da6f83d8fa5dad990cafe88cb4fbf7'
let urlparams = new URLSearchParams(location.search);
let qsIdGenero = urlparams.get('id');
let DiscoverEndpointPelis = `https://api.themoviedb.org/3/discover/movie`;
let DiscoverEndpointSeries = `https://api.themoviedb.org/3/discover/tv`;
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