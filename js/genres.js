let apiKey = "d4da6f83d8fa5dad990cafe88cb4fbf7";
let urlGenerosPeliculas = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=es`;
let urlGenerosSeries = `https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}&language=es`

let listaPeliculas = document.querySelector("#generosPelisId")
let listaSeries = document.querySelector("#generosSeriesId")

fetch(urlGenerosPeliculas)
   .then(function(response) {
      return response.json();
    })
   .then(function(data) {
      console.log(data);
      miData = data.genres;
      contenido = " ";
      for (let i = 0; i < miData.length; i++){
         contenido += `<a href=./detail-genres.html?id=${miData[i].id}"><li>${miData[i].name}</li></a>`;
         listaPeliculas.innerHTML = contenido;
      };
    })
   .catch(function(error){
      console.log("Error: " + error);
   })

fetch(urlGenerosSeries)
   .then(function(response) {
      return response.json() ; 
   })
   .then(function(data) {
      console.log(data);
      miData = data.genres;
      contenido = " ";
      for (let i = 0; i < miData.length; i++){
         contenido +=`<a href=./detail-genres.html?id=${miData[i].id}"><li>${miData[i].name}</li></a>`;
         listaSeries.innerHTML = contenido;
      };
   })
   .catch(function(error){
      console.log("Error: " + error);
   })