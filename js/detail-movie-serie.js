let apiKey= 'd4da6f83d8fa5dad990cafe88cb4fbf7';
let idPelicula= 2000;

fetch(`https://api.themoviedb.org/3/movie/12225-peppa-pig?api_key=${apiKey}`)
    .then(function(response){
        console.log(response)
        return response.json();
    })
    .then(function(data){
        
    })
    .catch(function(error){
        console.log('El error es: ' + error)
    })
