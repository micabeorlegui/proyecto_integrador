let apiKey= 'd4da6f83d8fa5dad990cafe88cb4fbf7';
let idPelicula= 157350;

fetch(`https://api.themoviedb.org/3/movie/${idPelicula}?api_key=${apiKey}&language=es`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        let fotoDePortada= data.poster_path;
        let titulo= data.title;
        let calificacion= data.vote_average;
        let estreno= data.release_date;
        let duracion= data.runtime;
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
                listaLi[i].innerHTML=`<b>Duración:</b> ${duracion} m`;
            } else if (i==3){
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

fetch(`https://api.themoviedb.org/3/movie/${idPelicula}/recommendations?api_key=${apiKey}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        let pelisRecomendaciones= data.results;
        let imgRecomedaciones=[];
        let titulosRecomendaciones=[];
        let idsRecomendaciones=[];
        for (let i=0; i<pelisRecomendaciones.length; i++){
            let imagen= pelisRecomendaciones[i].poster_path;
            imgRecomedaciones.push(imagen);
            let titulo= pelisRecomendaciones[i].title;
            titulosRecomendaciones.push(titulo);
            let id= pelisRecomendaciones[i].id;
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
        let imagenes= recomendacionesSect.querySelectorAll('div a img');

        boton.addEventListener('click', function(){
            let baseUrl= "https://image.tmdb.org/t/p/w500";
            for (let i=0; i<imagenes.length; i++){
                imagenes[i].src = `${baseUrl}${imgCincoRecomendaciones[i]}`;
                imagenes[i].alt = `${tituloCincoRecomendaciones[i]}`;
            };
            for (let i=0; i<divs.length; i++){
                divs[i].style.display= 'inline-block';
            };    
        });


    })
    .catch(function(error){
        console.log('El error es: ' + error)
    })
