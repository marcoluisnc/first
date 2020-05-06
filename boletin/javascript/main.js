/*
Array de celdas
let celdas = document.querySelectorAll("td");
console.log(celdas);
celdas.forEach(function(td){
    td.addEventListener('click',function(){
        console.log(this)
    });
});
*/

//Obtener los elementos de la clase close
let links = document.querySelectorAll(".close");
console.log(links);

links.forEach(function(link){
    //agregar un evento click a cada uno de ellos
    link.addEventListener('click',function(ev){
            ev.preventDefault();
            let content = document.querySelector(".content");

            //Quitarle las clases de animación qué ya tiene
            content.classList.remove("fadeInUpBig");
            content.classList.remove("animated");

            //Agregarle otras clases de animación
            content.classList.add("fadeOutUpBig");
            content.classList.add("animated");

            //setTimeOut sirve para ejecutar una operación después de x tiempo
            setTimeout(function(){
                location.href = "../index.html";
            },500);
            //setInterval sirve para ejecutar varias operaciones despues de x tiempo
            return false;
    });
});
