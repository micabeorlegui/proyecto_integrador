let apiKey= "d4da6f83d8fa5dad990cafe88cb4fbf7"
let urlPelicula= `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es`

fetch(urlPelicula)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        let peliculasPopulares = data.results;
        let titulosPeliculas= [];
        let fotosDePortadasPelis= [];
        let estrenosPelis= [];
       /// console.log(titulosPeliculas)
       /// console.log(fotosDePortadasPelis)
       ///console.log(estrenosPelis)

        for (let i=0; i<peliculasPopulares.length; i++){
            let titulo= peliculasPopulares[i].title;
            titulosPeliculas.push(titulo);
            let imagen= peliculasPopulares[i].poster_path;
            fotosDePortadasPelis.push(imagen);
            let estreno= peliculasPopulares[i].release_date;
            estrenosPelis.push(estreno)
        };

        let cincoNumRandom= [];
        for(let i=0; i<5; i++){
            let numRandom= Math.floor(Math.random() * titulosPeliculas.length);
            if (!cincoNumRandom.includes(numRandom)){
                cincoNumRandom.push(numRandom)
            }else{
                i--;
            };
        };

        let tituloCincoPelis=[]
        let imgCincoPelis= []
        let estrenoCincoPelis=[]
        console.log(tituloCincoPelis)
        for (let i=0; i<5; i++){
            tituloCincoPelis.push(titulosPeliculas[cincoNumRandom[i]]);
            imgCincoPelis.push(fotosDePortadasPelis[cincoNumRandom[i]]);
            estrenoCincoPelis.push(estrenosPelis[cincoNumRandom[i]])
        };


        //invoco
        let sectionPeliculas= document.querySelector('.sect_uno');
        let divsPeliculas= sectionPeliculas.querySelectorAll('div');



        for (let i=0; i<divsPeliculas.length; i++){
            let h3Titulo= divsPeliculas[i].querySelector('h3');
            let imagen= divsPeliculas[i].querySelector('img');
            let parrafo= divsPeliculas[i].querySelector('p');
            
            h3Titulo.innerText=`${tituloCincoPelis[i]}`;
            let baseUrl= "https://image.tmdb.org/t/p/w500"; 
            imagen.src= `${baseUrl}` + `${imgCincoPelis[i]}`; 
            imagen.alt=`${tituloCincoPelis[i]}`;  
            parrafo.innerText= `Estreno: ${estrenoCincoPelis[i]}`;

        };

    })
    .catch(function(error){
        console.log('El error es: ' + error)
    })

//parte de series populares
let urlSeries= `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=es`;
fetch(urlSeries)
    .then(function(response){
        return response.json();
     })
    .then(function(data){
        console.log(data);
        let seriesPopulares= data.results;
        let titulosSeries=[];
        let fotosDePortadasSeries=[];
        let estrenosSeries=[];

        for (let i=0; i<seriesPopulares.length; i++){
            let titulo= seriesPopulares[i].name;
            titulosSeries.push(titulo);
            let imagen= seriesPopulares[i].poster_path;
            fotosDePortadasSeries.push(imagen);
            let estreno= seriesPopulares[i].first_air_date;
            estrenosSeries.push(estreno)
        };
       
        let cincoNumRandom= [];
        for(let i=0; i<5; i++){
            let numRandom= Math.floor(Math.random() * titulosSeries.length);
            if (!cincoNumRandom.includes(numRandom)){
                cincoNumRandom.push(numRandom)
            }else{
                i--;
            };
        };
        
        let tituloCincoSeries=[]
        let imgCincoSeries= []
        let estrenoCincoSeries=[]
        console.log(tituloCincoSeries)
        for (let i=0; i<5; i++){
            tituloCincoSeries.push(titulosSeries[cincoNumRandom[i]]);
            imgCincoSeries.push(fotosDePortadasSeries[cincoNumRandom[i]]);
            estrenoCincoSeries.push(estrenosSeries[cincoNumRandom[i]])
        };

        let sectionSeries= document.querySelector('.sect_dos');
        let divsSeries= sectionSeries.querySelectorAll('div');



        for (let i=0; i<divsSeries.length; i++){
            let h3Titulo= divsSeries[i].querySelector('h3');
            let imagen= divsSeries[i].querySelector('img');
            let parrafo= divsSeries[i].querySelector('p');
            
            h3Titulo.innerText=`${tituloCincoSeries[i]}`;
            let baseUrl= "https://image.tmdb.org/t/p/w500"; 
            imagen.src= `${baseUrl}` + `${imgCincoSeries[i]}`; 
            imagen.alt=`${tituloCincoSeries[i]}`;  
            parrafo.innerText= `Estreno: ${estrenoCincoSeries[i]}`;

        };
    })
    .catch(function(error){
        console.log('El error es: ' + error);
    })

    /// parte de recomendado para ti
    let urlRec= `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=es`;
    fetch(urlRec)
        .then(function(response){
          return response.json();
        })
        .then(function(data){
            console.log(data);
            let recomendados= data.results;
            let titulosRecomendados=[];
            let fotosDePortadasRecomendados=[];
            let estrenosRecomendados=[];

            for (let i=0; i<recomendados.length; i++){
                let titulo= recomendados[i].title;
                titulosRecomendados.push(titulo);
                let imagen= recomendados[i].poster_path;
                fotosDePortadasRecomendados.push(imagen);
                let estreno= recomendados[i].release_date;
                estrenosRecomendados.push(estreno)
            };

            let cincoNumRandom= [];
            for(let i=0; i<5; i++){
                let numRandom= Math.floor(Math.random() * titulosRecomendados.length);
                if (!cincoNumRandom.includes(numRandom)){
                    cincoNumRandom.push(numRandom)
                }else{
                    i--;
                };
            }
        
            let tituloCincoRecomendados=[]
            let imgCincoRecomendados= []
            let estrenoCincoRecomendados=[]
            console.log(tituloCincoRecomendados)
            for (let i=0; i<5; i++){
                tituloCincoRecomendados.push(titulosRecomendados[cincoNumRandom[i]]);
                imgCincoRecomendados.push(fotosDePortadasRecomendados[cincoNumRandom[i]]);
                estrenoCincoRecomendados.push(estrenosRecomendados[cincoNumRandom[i]])
            };

            let sectionRecomendados= document.querySelector('.sect_tres');
            let divsRecomendados= sectionRecomendados.querySelectorAll('div');

            for (let i=0; i<divsRecomendados.length; i++){
                let h3Titulo= divsRecomendados[i].querySelector('h3');
                let imagen= divsRecomendados[i].querySelector('img');
                let parrafo= divsRecomendados[i].querySelector('p');
                
                h3Titulo.innerText=`${tituloCincoRecomendados[i]}`;
                let baseUrl= "https://image.tmdb.org/t/p/w500"; 
                imagen.src= `${baseUrl}` + `${imgCincoRecomendados[i]}`; 
                imagen.alt=`${tituloCincoRecomendados[i]}`;  
                parrafo.innerText= `Estreno: ${estrenoCincoRecomendados[i]}`;
    
            }; 
        })
        .catch(function(error){
            console.log('El error es: ' + error);
        })       

