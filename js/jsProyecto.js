var btnHtml = document.querySelector(".btn_html");
var btnJs = document.querySelector(".btn_js");
var btnPhp = document.querySelector(".btn_php");

var articulosHTML = document.querySelectorAll(".html");
var articulosPHP = document.querySelectorAll(".php");
var articulosJS = document.querySelectorAll(".js");






btnHtml.addEventListener("click", () => {
    articulosHTML.forEach(element => {
        element.style.display = "flex";
        
    });
    articulosPHP.forEach(element => {
        element.style.display = "none";

    });
    articulosJS.forEach(element => {
        element.style.display = "none";
    });
});

btnJs.addEventListener("click", () => {
    articulosJS.forEach(element => {
        element.style.display = "flex";
    });
    articulosHTML.forEach(element => {
        element.style.display = "none";

    });
    articulosPHP.forEach(element => {
        element.style.display = "none";
    });
});

btnPhp.addEventListener("click", () => {
    articulosPHP.forEach(element => {
        element.style.display = "flex";
    });
    articulosHTML.forEach(element => {
        element.style.display = "none";
    });
    articulosJS.forEach(element => {
        element.style.display = "none";
    });
});