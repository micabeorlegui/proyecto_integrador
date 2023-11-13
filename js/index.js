let apiKey= "d4da6f83d8fa5dad990cafe88cb4fbf7"
let url= `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es`
fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        //invoco
       let sectionPeliculas= document.querySelector('.sect_uno');
       let h3Titulo= sectionPeliculas.querySelectorAll('div h3 a');
       let imagen= sectionPeliculas.querySelector('img');
       let parrafo= sectionPeliculas.querySelector('p');
       let primeraPelicula = data.results[0];
    
       let titulo= primeraPelicula.title;
       let fotoPortada= primeraPelicula.poster_path;
       let estreno= primeraPelicula.release_date;
       let baseUrl= "/628Dep6AxEtDxjZoGP78TsOxYbK.jpg";  //corregir
       h3Titulo.innerText=`${titulo}`; 
       parrafo.innerText= `Estreno: ${estreno}`
       imagen.src= `${baseUrl}` + `${fotoPortada}`; //corregir
       imagen.alt= titulo; //corregir
        
       for (let i=0; i<5;i++){
        //hacer bucles
       }
       for (let i=0; i<5;i++){
        h3Titulo{i}.innerText= []
        //hacer bucle con lista vacia

    })
    .catch(function(error){
        console.log('El error es: ' + error);
    });

///         let imagen= sectionPeliculas.querySelector('img');
 ///       let parrafo= sectionPeliculas.querySelector('p');

 ///       let primeraPelicula = data.results[0];
 ///       let titulo= primeraPelicula.title;
 ///       let fotoPortada= primeraPelicula.poster_path;
  ///      let estreno= primeraPelicula.release_date;
        //let baseUrl= "/628Dep6AxEtDxjZoGP78TsOxYbK.jpg";  //corregir
 ///       h3Titulo.innerText=`${titulo}`; 
  ///      parrafo.innerText= `Estreno: ${estreno}`
        //imagen.src= `${baseUrl}` + `${fotoPortada}`; //corregir
        //imagen.alt= titulo; //corregir

  ///      let sectionPeliculas= document.querySelector('.sect_uno');
  ///      let h3Titulo= sectionPeliculas.querySelectorAll('div h3 a');
   ///     console.log(h3Titulo)
   ///     let imagen= sectionPeliculas.querySelector('img');
   ///     let parrafo= sectionPeliculas.querySelectorAll('p');

   ///     let primeraPelicula = data.results[0];
    ///    let titulo= primeraPelicula.title;
    ///    let fotoPortada= primeraPelicula.poster_path;
    ///    let estreno= primeraPelicula.release_date;
        //let baseUrl= "/628Dep6AxEtDxjZoGP78TsOxYbK.jpg";  //corregir
   ///     h3Titulo.innerText=`${titulo}`; 
   ///     parrafo.innerText= `Estreno: ${estreno}`
        //imagen.src= `${baseUrl}` + `${fotoPortada}`; //corregir
        //imagen.alt= titulo; //corregir

  ///      for (let i=0; i<h3Titulo.length;i++){
  ///          h3Titulo[i].innerHTML=` ${titulo}`;
   ///     };
   ///     for (let i=0; i<h3Titulo.length;i++){
   ///         `parrafo[i].innerText= `Estreno: ${estreno}`
    ///    };
///
