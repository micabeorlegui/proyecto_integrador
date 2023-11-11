let apiKey= 'd4da6f83d8fa5dad990cafe88cb4fbf7';
let idPelicula= 2000;

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
        let genero_nombres= []
        let generes_info_api= data.genres
        for (let i=0; i<generes_info_api.length; i++){
            let nombre= generes_info_api[i].name;
            genero_nombres.push(nombre);
        };

        let section_detail= document.querySelector('section');
        let imagen= section_detail.querySelector('img');
        let h2_titulo= section_detail.querySelector('div h2');
        let lista_li= section_detail.querySelectorAll('div ul li');

        let baseUrl= "https://image.tmdb.org/t/p/w500";
        imagen.src= `${baseUrl}` + `${fotoDePortada}`;
        imagen.alt=`${titulo}`;
        h2_titulo.innerText=`${titulo}`;
        for (let i=0; i<lista_li.length; i++){
            if(i==0){
                lista_li[i].innerHTML=`<b>Calificación:</b> ${calificacion}`;
            } else if (i==1){
                lista_li[i].innerHTML=`<b>Fecha de estreno:</b> ${estreno}`;
            } else if (i==2){
                lista_li[i].innerHTML=`<b>Duración:</b> ${duracion} m`;
            } else if (i==3){
                lista_li[i].innerHTML=`<b>Sinopsis:</b> ${sinopsis}`;
            } else{
                if (genero_nombres.length>1){
                    lista_li[i].innerHTML=`<a href="genres.html"><b>Géneros:</b> ${genero_nombres.join(', ')}</a>`; 
                } else{
                    lista_li[i].innerHTML=`<a href="genres.html"><b>Género:</b> ${genero_nombres}</a>`;
                };
            };
        };


    })
    .catch(function(error){
        console.log('El error es: ' + error)
    })
