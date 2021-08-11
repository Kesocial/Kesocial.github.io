class CPersona {
    constructor(nombre, edad, dni, genero, peso, altura) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.genero = genero;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() {
        let imc = this.peso / Math.pow(this.altura, 2);
        let valor;
        if (imc < 20) {
            valor = -1;
        }
        if ((imc >= 20) && (imc <= 25)) {
            valor = 0;
        }
        if (imc > 25) {
            valor = 1;
        }
        return valor;
    }
}

let enviar = document.getElementById("enviar");
let btn1 = document.getElementById("btn");
let btnTrabajos = document.getElementById("trabajosPracticos");
let btnInicio = document.getElementById("inicio");
let navbar = document.getElementsByClassName("nav-navbar");
let navSection = document.getElementsByClassName("nav-label");
let navSubSection = document.getElementsByClassName("nav-SubSection");

btn1.onclick = function() {
    navbar[0].classList.toggle("active");
    navSection[0].classList.toggle("nav-section2");
    navSubSection[0].classList.remove("collapse-works");
}
btnTrabajos.onclick = function() {
    navSubSection[0].classList.toggle("collapse-works");
    navbar[0].classList.remove("active");
}

enviar.onclick = function() {
    let nombre = document.getElementById("nombre");
    let edad = document.getElementById("edad");
    let dni = document.getElementById("dni");
    let genero = document.getElementById("genero");
    let altura = parseFloat(document.getElementById("altura"));
    let peso = parseInt(document.getElementById("peso"));

    const p1 = new CPersona(nombre, edad, dni, genero, peso, altura);
    let imc = p1.calcularIMC();
    document.write(altura);
    document.write(peso);
}