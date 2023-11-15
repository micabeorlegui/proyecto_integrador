document.addEventListener("DOMContentLoaded", function() {
    const apiKey = "d4da6f83d8fa5dad990cafe88cb4fbf7";
    const urlGenerosPeliculas = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=es`;

    fetch(urlGenerosPeliculas)
        .then(function(response){
        return response.json();
        })
        .then(function (data){
           console.log(data)
            const genresList = document.getElementById("genresList");

            data.genres.forEach(genre => {
                const genreItem = document.createElement("div");
                genreItem.innerHTML = `<li><a href="detail-genres.html?genreId=${genre.id}&genreName=${genre.name}">${genre.name}</a></li>`;
                genresList.appendChild(genreItem.firstChild);
                let titulo = document.querySelector(".genres")
                titulo.style.color = "pink"
            });
        })
        .catch(function (error){
            console.log('El error es: ' + error)
        })
});
