let apiKey = 'd4da6f83d8fa5dad990cafe88cb4fbf7'
let urlparams = new URLSearchParams(location.search);
let qsIdGenero = urlparams.get('id');
let DiscoverEndpointPelis = `https://api.themoviedb.org/3/discover/movie`;
let DiscoverEndpointSeries = `https://api.themoviedb.org/3/discover/tv`;

qsIdDivPelis = document.querySelector("#detail-genresPelis")

let detailGenresPelis = `${DiscoverEndpointPelis}?api_key=${apiKey}&with_genres=${qsIdGenero}`;

fetch(detailGenresPelis)
	.then(function(response){
	return response.json();
 })
	.then(function(data){
	 console.log(data);
	 let miData = data.results;
	 contenido = ' ';

	  for (let i = 0; i < 5; i++) {
		contenido +=
		 `<section class="detalleGenerosPelis" id="detail-genresPelis">
		   <div>
			<a href="detail-movie.html?id=${miData[i].id}"><img src="https://image.tmdb.org/t/p/w500/${miData[i].poster_path} " alt=""></a>
			<p>${miData[i].original_title}</p>
		   </div>
	      </section>`
	    }

qsIdDivPelis.innerHTML = contenido;

})

.catch(function(error){
 console.log('El error es: ' + error);
})



let detailGenresSeries = `${DiscoverEndpointSeries}?api_key=${apiKey}&with_genres=${qsIdGenero}`;

fetch(detailGenresSeries)
	.then(function(response){
	  return response.json();
    })
    .then(function(data){
	 console.log(data);
     let miData = data.results;
	 contenido = ' ';

	  for (let i = 0; i < 5; i++) {
		contenido +=
		 `<section class="detalleGenerosSeries" id="detail-genresSeries">
		   <div>
			<a href="detail-serie.html?id=${miData[i].id}"><img src="https://image.tmdb.org/t/p/w500/${miData[i].poster_path} " alt=""></a>
			<p>${miData[i].original_name}</p>
		   </div>
	      </section>`
	    }

qsIdDivSeries.innerHTML = contenido;

})

.catch(function(error){
	console.log('El error es: ' + error);
})