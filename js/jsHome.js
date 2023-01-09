var btnProyectos = document.querySelector(".btnProyectos");
var btnHobby = document.querySelector(".btnHobbies");
var btnSobreMi = document.querySelector(".btnSobremi");
var btnDAM = document.querySelector(".btnDAM");

var articulosProyectos = document.querySelectorAll(".proyectos");
var articulosHobbies = document.querySelectorAll(".hobbies");
var articulosSobreMi = document.querySelectorAll(".sobremi");
var articulosDAM = document.querySelectorAll(".dam");






btnProyectos.addEventListener("click", () => {
    articulosProyectos.forEach(element => {
        element.style.display = "flex";
    });
    articulosHobbies.forEach(element => {
        element.style.display = "none";
    });
    articulosSobreMi.forEach(element => {
        element.style.display = "none";
    });
    articulosDAM.forEach(element => {
        element.style.display = "none";
    });
});

btnHobby.addEventListener("click", () => {
    articulosHobbies.forEach(element => {
        element.style.display = "flex";
    });
    articulosProyectos.forEach(element => {
        element.style.display = "none";
    });
    articulosSobreMi.forEach(element => {
        element.style.display = "none";
    });
    articulosDAM.forEach(element => {
        element.style.display = "none";
    });
});

btnSobreMi.addEventListener("click", () => {
    articulosSobreMi.forEach(element => {
        element.style.display = "flex";
    });
    articulosHobbies.forEach(element => {
        element.style.display = "none";
    });
    articulosProyectos.forEach(element => {
        element.style.display = "none";
    });
    articulosDAM.forEach(element => {
        element.style.display = "none";
    });
});


btnDAM.addEventListener("click", () => {
    articulosDAM.forEach(element => {
        element.style.display = "flex";
    });
    articulosHobbies.forEach(element => {
        element.style.display = "none";
    });
    articulosSobreMi.forEach(element => {
        element.style.display = "none";
    });
    articulosProyectos.forEach(element => {
        element.style.display = "none";
    });
});