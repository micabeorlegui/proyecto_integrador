let apiKey= "d4da6f83d8fa5dad990cafe88cb4fbf7"
let urlPelicula= `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es`
fetch(urlPelicula)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        //invoco
       let sectionPeliculas= document.querySelector('.sect_uno');
       let h3Titulo= sectionPeliculas.querySelector('div h3 a');
       let imagen= sectionPeliculas.querySelector('img');
       let parrafo= sectionPeliculas.querySelector('p');
       let primeraPelicula = data.results[0];
    
       let titulo= primeraPelicula.title;
       let fotoPortada= primeraPelicula.poster_path;
       let estreno= primeraPelicula.release_date;
       let baseUrl= "/628Dep6AxEtDxjZoGP78TsOxYbK.jpg";  //corregir
       h3Titulo.innerText=`${titulo}`; 
       parrafo.innerText= `Estreno: ${estreno}`;
       imagen.src= `${baseUrl}` + `${fotoPortada}`; //corregir
       imagen.alt= titulo; //corregir    
    });
    .catch(function(error){
        console.log('El error es: ' + error);
    });
//parte de series populares
let urlSeries= `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=es`;
fetch(urlSeries)
    .then(function(response){
        return response.json();
     })
    .then(function(data){
        console.log(data);
        //invoco
       let sectionSeries= document.querySelector('.sect_dos');
       let h3TituloS= sectionSeries.querySelector('div h3 a');
       let imagenS= sectionSeries.querySelector('img');
       let parrafoS= sectionSeries.querySelector('p');
       let primeraSerie = data.results[0];

       let tituloS= primeraSerie.name;
       let fotoPortadaS= primeraSerie.poster_path;
       let estrenoS= primeraSerie.first_air_date;
       let baseUrlS= "/53aonG0QS3ynbYuuwhPtyoOwTDD.jpg";  //corregir
       h3TituloS.innerText=`${tituloS}`; 
       parrafoS.innerText= `Estreno: ${estrenoS}`;
       imagenS.src= `${baseUrlS}` + `${fotoPortadaS}`; //corregir
       imagenS.alt= titulo; //corregir
    
    });
    .catch(function(error){
        console.log('El error es: ' + error);
    });

    /// parte de recomendado para ti
    let urlRec= `https://api.themoviedb.org/3/person/popular?api_key=${apiKey}&language=es`;
    fetch(urlRec)
        .then(function(response){
          return response.json();
        });
        .then(function(data){
            console.log(data);
            //invoco
           let sectionRec= document.querySelector('.sect_tres');
           let h3TituloRec= sectionRec.querySelector('div h3 a');
           let imagenRec= sectionRec.querySelector('img');
           let parrafoRec= sectionRec.querySelector('p');
           let primerRec = data.results[0];
    
           let tituloRec= primeraRec.name;
           let fotoPortadaRec= primeraRec.poster_path;
           let estrenoRec= primerRec.first_air_date;
           let baseUrlRec= "/53aonG0QS3ynbYuuwhPtyoOwTDD.jpg";  //corregir
           h3TituloRec.innerText=`${tituloRec}`; 
           parrafoRec.innerText= `Estreno: ${estrenoRec}`;
           imagenRec.src= `${baseUrlRec}` + `${fotoPortadaRec}`; //corregir
           imagenRec.alt= titulo; //corregir
        });
        .catch(function(error){
            console.log('El error es: ' + error);
        });