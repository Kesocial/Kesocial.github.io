class CPassword {
    constructor(usuario, clave, longitud) {
        this.usuario = usuario;
        this.clave = clave;
        this.longitud = longitud;
    }
    esFuerte() {
        let clave = this.clave;
        let claveMay = this.clave.toUpperCase();
        let claveMin = this.clave.toLowCase();
        let arrayNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        let condicion = false;
        let contNum = 0;
        let contMin = 0;
        let contMay = 0;

        for (i = 0; i < this.longitud; i++) {
            if (clave[i] == claveMay[i]) {
                contMay++;
            }
            if (clave[i] == claveMin[i]) {
                contMin++;
            }

            if (clave[i] == arrayNum[i]) {
                contNum++;
            }
        }

        if (contMay >= 2 && contMin >= 3 && contNum >= 2) {
            condicion = true;
        }

        return condicion;
    }
    Chequearpassword(resultadoEsFuerte) {
        let resultado = "";
        if (resultadoEsFuerte) {
            resultado =
                " La contraseña ingresada cumple con los requisitos establecidos";
        } else {
            resultado =
                " La contraseña ingresada NO cumple con los requisitos establecidos";
        }
        return resultado;
    }
}
let inputs = document.getElementsByClassName("input");
let main = document.getElementsByClassName("main");
let datos = document.getElementsByClassName("datos");
let enviar = document.getElementsByClassName("enviar");
enviar[0].onclick = function() {
    let condicion = false;

    for (let i = 0; i < inputs.length; i++) {
        if (
            inputs[i].value == null ||
            inputs[i].value.length == 0 ||
            /^\s+$/.test(inputs[i].value)
        ) {
            condicion = false;
            console.log(condicion);
        } else {
            condicion = true;
            console.log(condicion);
            break;
        }
    }
    if (condicion) {
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