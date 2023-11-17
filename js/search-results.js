document.addEventListener("DOMContentLoaded", function(){
    let queryString=location.search;
    let queryStringObj= new URLSearchParams(queryString);
    let buscar= queryStringObj.get('busqueda');
    let h2Resultado= document.querySelector('#searchResults');
    h2Resultado.innerText= ` Resultado de búsqueda para: ${buscar}`;

    let apiKey= 'd4da6f83d8fa5dad990cafe88cb4fbf7';

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=es&query=${buscar}`)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data)
            let resultados= data.results;
            let searchSect= document.querySelector('.search');
            let searchDivs= searchSect.querySelectorAll('div');

            if (resultados.length === 0){
                h2Resultado.innerText='No hay resultados para su búsqueda :('
            }else{
                for(let i=0; i<searchDivs.length; i++){
                    let idPelicula= resultados[i].id;
                    let tituloPelicula= resultados[i].title;
                    let baseUrl= "https://image.tmdb.org/t/p/w500";
                    let fotoDePortada= resultados[i].poster_path;
                    let imgPelicula=`${baseUrl}` + `${fotoDePortada}`;
                    let estreno= resultados[i].release_date;

                    searchDivs[i].querySelector('h3').innerText=`${tituloPelicula}`;
                    let a= searchDivs[i].querySelector('a');
                    a.href= `detail-movie.html?id=${idPelicula}`
                    let imagen= searchDivs[i].querySelector('img');
                    imagen.src=`${imgPelicula}`;
                    imagen.alt=`${tituloPelicula}`;
                    searchDivs[i].querySelector('p').innerHTML=`<b>Estreno:</b> ${estreno}`
                    
                };
            };

        })
        .catch(function(error){
            console.log('El error es: ' + error)
        })

        fetch(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=es&query=${buscar}`)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data)
            let resultados= data.results;
            let searchSect= document.querySelector('.search');
            let searchDivs= searchSect.querySelectorAll('div');

            if (resultados.length === 0){
                h2Resultado.innerText='No hay resultados para su búsqueda :('
            }else{
                for(let i=0; i<searchDivs.length; i++){
                    let idSerie= resultados[i].id;
                    let tituloSerie= resultados[i].original_name;
                    let baseUrl= "https://image.tmdb.org/t/p/w500";
                    let fotoDePortada= resultados[i].poster_path;
                    let imgSerie=`${baseUrl}` + `${fotoDePortada}`;
                    let estreno= resultados[i].first_air_date;

                    searchDivs[i].querySelector('h3').innerText=`${tituloSerie}`;
                    let a= searchDivs[i].querySelector('a');
                    a.href= `detail-serie.html?id=${idSerie}`
                    let imagen= searchDivs[i].querySelector('img');
                    imagen.src=`${imgSerie}`;
                    imagen.alt=`${tituloSerie}`;
                    searchDivs[i].querySelector('p').innerHTML=`<b>Estreno:</b> ${estreno}`
                    if (tituloSerie.length<25 ){
                        console.log("Cumple la condición")
                        imagen.style.marginTop= "32px";
                    }
                    
                };
            };

        })
        .catch(function(error){
            console.log('El error es: ' + error)
        })
})

