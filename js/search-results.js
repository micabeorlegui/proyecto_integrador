let busqueda= document.querySelector('#searchForm');
busqueda.addEventListener("submit", function(event){
    event.preventDefault();
    let inputTexto = document.querySelector('#searchInput').value;
    document.querySelector('#searchResults').innerHTML= ` Resultado de búsqueda para: ${inputTexto}`;
})

let queryString=location.search;
let queryStringObj= new URLSearchParams(queryString);
console.log(queryStringObj)
let buscar= queryStringObj.get('busqueda'); //aca me va a dat lo que estoy buscando
console.log(buscar)