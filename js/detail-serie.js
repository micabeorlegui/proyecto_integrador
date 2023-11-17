document.addEventListener("DOMContentLoaded", function(){
    let queryString=location.search;
    let queryStringObj= new URLSearchParams(queryString);
    let idSerie= queryStringObj.get('id');
    
    let apiKey= 'd4da6f83d8fa5dad990cafe88cb4fbf7';

    fetch(`https://api.themoviedb.org/3/tv/${idSerie}?api_key=${apiKey}&language=es`)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data)
            let fotoDePortada= data.poster_path;
            let titulo= data.name;
            let calificacion= data.vote_average;
            let estreno= data.first_air_date;
            let temporadas= data.number_of_seasons;
            let sinopsis= data.overview;
            let generoNombres= []
            let generesInfoApi= data.genres
            for (let i=0; i<generesInfoApi.length; i++){
                let nombre= generesInfoApi[i].name;
                generoNombres.push(nombre);
            };

            let sectionDetail= document.querySelector('section');
            let imagen= sectionDetail.querySelector('img');
            let h2Titulo= sectionDetail.querySelector('div h2');
            let listaLi= sectionDetail.querySelectorAll('div ul li');

            let baseUrl= "https://image.tmdb.org/t/p/w500";
            imagen.src= `${baseUrl}` + `${fotoDePortada}`;
            imagen.alt=`${titulo}`;
            h2Titulo.innerText=`${titulo}`;
            for (let i=0; i<listaLi.length; i++){
                if(i==0){
                    listaLi[i].innerHTML=`<b>Calificación:</b> ${calificacion}`;
                } else if (i==1){
                    listaLi[i].innerHTML=`<b>Fecha de estreno:</b> ${estreno}`;
                } else if (i==2){
                    listaLi[i].innerHTML=`<b>Temporadas:</b> ${temporadas}`;
                }else if (i==3){
                    listaLi[i].innerHTML=`<b>Sinopsis:</b> ${sinopsis}`;
                } else{
                    if (generoNombres.length>1){
                        listaLi[i].innerHTML=`<a href="genres.html"><b>Géneros:</b> ${generoNombres.join(', ')}</a>`; 
                    } else{
                        listaLi[i].innerHTML=`<a href="genres.html"><b>Género:</b> ${generoNombres}</a>`;
                    };
                };
            };
        })
        .catch(function(error){
            console.log('El error es: ' + error)
        })

    fetch(`https://api.themoviedb.org/3/tv/${idSerie}/recommendations?api_key=${apiKey}`)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data)
            let seriesRecomendaciones= data.results;
            let imgRecomedaciones=[];
            let titulosRecomendaciones=[];
            let idsRecomendaciones=[];
            for (let i=0; i<seriesRecomendaciones.length; i++){
                let imagen= seriesRecomendaciones[i].poster_path;
                imgRecomedaciones.push(imagen);
                let titulo= seriesRecomendaciones[i].title;
                titulosRecomendaciones.push(titulo);
                let id= seriesRecomendaciones[i].id;
                idsRecomendaciones.push(id)
            };
        
            let cincoNumRandom= [];
            for(let i=0; i<5; i++){
                let numRandom= Math.floor(Math.random() * imgRecomedaciones.length);
                if (!cincoNumRandom.includes(numRandom)){
                    cincoNumRandom.push(numRandom)
                }else{
                    i--;
                };
            };

            let imgCincoRecomendaciones= []
            let tituloCincoRecomendaciones=[]
            let idsCincoRecomendaciones=[]
            for (let i=0; i<5; i++){
                imgCincoRecomendaciones.push(imgRecomedaciones[cincoNumRandom[i]]);
                tituloCincoRecomendaciones.push(titulosRecomendaciones[cincoNumRandom[i]]);
                idsCincoRecomendaciones.push(idsRecomendaciones[cincoNumRandom[i]])
            };

            let boton= document.querySelector('#recomendaciones_boton');
            let recomendacionesSect= document.querySelector('.recomendaciones');
            let divs= recomendacionesSect.querySelectorAll('div');
            let a= recomendacionesSect.querySelectorAll('a');
            let imagenes= recomendacionesSect.querySelectorAll('img');

            boton.addEventListener('click', function(){
                let baseUrl= "https://image.tmdb.org/t/p/w500";
                for (let i=0; i<imagenes.length; i++){
                    imagenes[i].src = `${baseUrl}${imgCincoRecomendaciones[i]}`;
                    imagenes[i].alt = `${tituloCincoRecomendaciones[i]}`;
                    a[i].href+=`?id=${idsCincoRecomendaciones[i]}`
                };
                for (let i=0; i<divs.length; i++){
                    divs[i].style.display= 'inline-block';
                };    
            });


        })
        .catch(function(error){
            console.log('El error es: ' + error)
        })

    fetch(`https://api.themoviedb.org/3/tv/${idSerie}/reviews?api_key=${apiKey}&language=es`)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data)
            let resenasSeries= data.results;

            let botonRes= document.querySelector('#resenas_boton');
            let resenasSect= document.querySelector('.resenas');
            let listaLi= resenasSect.querySelector('div ul li');

            if(resenasSeries.length>0){
                for(let i=0; i<resenasSeries.length; i++){
                    let autor= resenasSeries[i].author;
                    let comentario= resenasSeries[i].content;

                    if(i==0){
                        listaLi.innerHTML=`<b>${autor}</b>: ${comentario}`
                    }else{
                        resenasSect.innerHTML+=`<div>
                                                    <ul>
                                                        <li><b>${autor}</b>: ${comentario}</li>
                                                    </ul>
                                                </div>`
                    };
                };

                let divsResenas= resenasSect.querySelectorAll('div');

                for(let i=0; i<divsResenas.length; i++){
                    botonRes.addEventListener('click', function(){
                        divsResenas[i].style.display= 'inline-block';
                    });
                }

            }else{
                listaLi.innerHTML=`<strong>Lo siento, no hay reseñas disponibles :(</strong>`
                let div= resenasSect.querySelector('div');
                botonRes.addEventListener('click', function(){
                    div.style.display= 'inline-block';
                    div.style.backgroundColor= 'Bisque';
                    listaLi.style.color= 'rgb(247, 134, 134)';
                });
            };

        })
        .catch(function(error){
            console.log('El error es: ' + error)
        })

        fetch(`https://api.themoviedb.org/3/tv/${idSerie}/videos?api_key=${apiKey}&language=es`)
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                console.log(data)
                let trailer= data.results[0];
                let trailerId= trailer.id;
                let youtube= trailer.site;

                let trailerSect= document.querySelector('.trailer');

                if (youtube === 'YouTube') {
                    let trailerUrl = 'https://www.youtube.com/embed/' + trailerId;
                    let iframe= trailerSect.querySelector('iframe');
                    iframe.src=`${trailerUrl}`;
                    iframe.style.display='inline-block'
                } else {
                    let parrafo= trailerSect.querySelector('p');
                    parrafo.innerHTML=`<strong>Lo siento, no hay trailer disponible para esta película :(</strong>`;
                    parrafo.style.display='inline-block';
                };
            })
            .catch(function(error){
                console.log('El error es: ' + error)
            })
})