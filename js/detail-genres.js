document.addEventListener('DOMContentLoaded', function () {
	let apiKey = 'd4da6f83d8fa5dad990cafe88cb4fbf7'
	let queryStringObj = new URLSearchParams(location.search);
	let genero= queryStringObj.get('name');
    let nombreGenero=queryStringObj.get('ng');
	let discoverEndpointPelis = `https://api.themoviedb.org/3/discover/movie`;
	let discoverEndpointSeries = `https://api.themoviedb.org/3/discover/tv`;

	let detailGenresPelis = `${discoverEndpointPelis}?api_key=${apiKey}&with_genres=${genero}`;

	fetch(detailGenresPelis)
		.then(function(response){
			return response.json();
 		})
		.then(function(data){
			console.log(data);
			let miData = data.results;
			contenido = ' ';
			if (miData[0]){
				for (let i = 0; i < 5; i++) {
					contenido +=`<div class="detail-genres">
									<h3>${miData[i].original_title}</h3>
									<a href="detail-movie.html?id=${miData[i].id}"><img src="https://image.tmdb.org/t/p/w500/${miData[i].poster_path} " alt="${miData[i].original_title}"></a>
								</div>`
	    		};
				let sectGenres= document.querySelector('.detalleGeneros')
				sectGenres.innerHTML += `<h2>${nombreGenero}</h2>
										${contenido}`;
			}else{
				sectGenres.innerHTML='<p>No se encontraron resultados para este género :(</p>';
			};
	})

	.catch(function(error){
 		console.log('El error es: ' + error);
	})



	let detailGenresSeries = `${discoverEndpointSeries}?api_key=${apiKey}&with_genres=${genero}`;

	fetch(detailGenresSeries)
		.then(function(response){
	  		return response.json();
    	})
    	.then(function(data){
			console.log(data);
			let miData = data.results;
			document.querySelector('.seudoBody').innerHTML=nombreGenero
			contenido = ' ';
			if (miData[0]){
				for (let i = 0; i < 5; i++) {
					contenido +=`<div class="detail-genres">
									<h3>${miData[i].original_title}</h3>
									<a href="detail-serie.html?id=${miData[i].id}"><img src="https://image.tmdb.org/t/p/w500/${miData[i].poster_path} " alt="${miData[i].original_title}"></a>
								</div>`
	    		};

				let sectGenres= document.querySelector('.detalleGeneros')
				sectGenres.innerHTML = contenido;
			}else{
				sectGenres.innerHTML='No se encontraron resultados para este género :(';
			};

	})

	.catch(function(error){
		console.log('El error es: ' + error);
	})
});