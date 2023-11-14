let busqueda= document.querySelector('#searchForm');
busqueda.addEventListener("submit", function(event){
    event.preventDefault();
    let inputTexto = document.querySelector('#searchInput').value;
    document.querySelector('#searchResults').innerHTML= ` Resultado de búsqueda para: ${inputTexto}`;
})
