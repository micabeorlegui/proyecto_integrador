let APIKey= "d4da6f83d8fa5dad990cafe88cb4fbf7"
let url= `https://api.themoviedb.org/3/movie/changes?api_key=${APIKey}`
fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let 
    })
    .catch(function(error){
        console.log('el error es:'+ error);
    })