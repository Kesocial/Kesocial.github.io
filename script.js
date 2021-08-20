let btn1 = document.getElementById("btn");
let btnTrabajos = document.getElementById("trabajosPracticos");
let btnInicio = document.getElementById("inicio");
let navbar = document.getElementsByClassName("nav-navbar");
let navSection = document.getElementsByClassName("nav-label");
let navSubSection = document.getElementsByClassName("nav-SubSection");
let navSubItem = document.getElementsByClassName("nav-SubItem");
btn1.onclick = function() {
    navbar[0].classList.toggle("active");
    navSection[0].classList.toggle("nav-section2");
    navSubSection[0].classList.remove("collapse-works");
};
btnTrabajos.onclick = function() {
    navSubSection[0].classList.toggle("collapse-works");
    navbar[0].classList.remove("active");
};
btnInicio.onclick = function() {
    navbar[0].classList.remove("active");
};