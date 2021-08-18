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
        if (imc >= 20 && imc <= 25) {
            valor = 0;
        }
        if (imc > 25) {
            valor = 1;
        }
        return valor;
    }
    esMayorDeEdad() {
        let condicion = false;
        if (this.edad >= 18) {
            condicion = true;
        } else {
            condicion = false;
        }
        return condicion;
    }
    genero() {
        let respuesta = "";
        if (
            this.genero == "M" &&
            this.genero == "m" &&
            this.genero == "F" &&
            this.genero == "f"
        ) {
            respuesta = "El genero ingresado es correcto";
        } else {
            respuesta = "El genero ingresado es incorrecto";
        }
        return respuesta;
    }
}

let enviar = document.getElementsByClassName("enviar");
var nombre = document.getElementById("nombre");
var edad = document.getElementById("edad");
var dni = document.getElementById("dni");
var genero = document.getElementById("genero");
var altura = document.getElementById("altura");
var peso = document.getElementById("peso");

let main = document.getElementsByClassName("main");
let datos = document.getElementsByClassName("datos");
var datosArray = [nombre, edad, dni, genero, peso, altura];

enviar[0].onclick = function() {
    let condicion = false;

    if (
        nombre.value == null ||
        nombre.value.length == 0 ||
        (/^\s+$/.test(nombre.value) && edad.value == null) ||
        edad.value.length == 0 ||
        (/^\s+$/.test(edad.value) && dni.value == null) ||
        dni.value.length == 0 ||
        (/^\s+$/.test(dni.value) && genero.value == null) ||
        genero.value.length == 0 ||
        (/^\s+$/.test(genero.value) && altura.value == null) ||
        altura.value.length == 0 ||
        (/^\s+$/.test(altura.value) && peso.value == null) ||
        peso.value.length == 0 ||
        /^\s+$/.test(peso.value)
    ) {
        condicion = false;
    } else {
        condicion = true;
    }

    var x;

    if (condicion) {
        let observaciones = document.getElementsByClassName("observaciones");
        for (i = 0; i < datosArray.length; i++) {
            datos[i].innerHTML = datos[i].innerHTML + " " + datosArray[i].value;
        }

        const p1 = new CPersona(
            nombre,
            parseInt(edad.value),
            dni,
            genero,
            parseInt(peso.value),
            parseFloat(altura.value)
        );
        let imc = 0;
        imc = p1.calcularIMC();
        switch (imc) {
            case 1:
                observaciones[0].innerHTML = "Usted esta por encima de su peso ideal";
                break;
            case 0:
                observaciones[0].innerHTML = "Usted esta en su peso ideal";
                break;
            case -1:
                observaciones[0].innerHTML = "Usted esta por debajo de su peso ideal";
                break;
        }
        let esMayorDeEdad = p1.esMayorDeEdad();
        let respuesta = p1.genero();
        // Muestro si es mayor de edad
        if (esMayorDeEdad) {
            observaciones[1].innerHTML = "Usted es mayor de edad";
        } else {
            observaciones[1].innerHTML = "Usted es menor de edad";
        }
        if (esMayorDeEdad) {
            observaciones[1].innerHTML = "Usted es mayor de edad";
        } else {
            observaciones[1].innerHTML = "Usted es menor de edad";
        }
        // Muestro si el genero ingresado es correcto

        observaciones[2].innerHTML = respuesta;

        main[0].classList.add("display-none");
        main[1].classList.remove("display-none");
    } else {
        alerta.classList.remove("display-none");
    }
};
enviar[1].onclick = function() {
    for (i = 0; i < datosArray.length; i++) {
        datos[i].innerHTML = datos[i].innerHTML.replace(datosArray[i].value, " ");
    }
    main[0].classList.remove("display-none");
    main[1].classList.add("display-none");
};