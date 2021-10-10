class CPassword {
    constructor(usuario, clave) {
        this.usuario = usuario;
        this.clave = clave;
        this.longitud = 10;
    }
    esFuerte() {
        let clave = this.clave;
        let claveMay = this.clave.toUpperCase();
        let claveMin = this.clave.toLowerCase();
        let condicion = false;
        let contNum = 0;
        let contMin = 0;
        let contMay = 0;

        for (let i = 0; i < this.longitud; i++) {
            if (isNaN(clave[i]) == false) {
                contNum++;
                continue;
            }

            if (clave[i] == claveMay[i] && isNaN(clave[i])) {
                contMay++;
                continue;
            }
            if (clave[i] == claveMin[i] && isNaN(clave[i])) {
                contMin++;
                continue;
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
//
let inputs = document.getElementsByClassName("input");
let main = document.getElementsByClassName("main");
let datos = document.getElementsByClassName("datos");
let enviar = document.getElementsByClassName("enviar");
var datosArray = [];
let alerta = document.getElementsByClassName("alerta");
let viewPassword = document.getElementsByClassName("view-password");

for (let i = 0; i < inputs.length; i++) {
    datosArray.push(inputs[i]);
}

enviar[0].onclick = function() {
    let condicion = false;
    // creacion del objeto
    console.log(datosArray[0].value);
    console.log(datosArray[1].value);
    const p1 = new CPassword(datosArray[0].value, datosArray[1].value);
    for (let i = 0; i < inputs.length; i++) {
        if (
            inputs[i].value == null ||
            inputs[i].value.length == 0 ||
            /^\s+$/.test(inputs[i].value)
        ) {
            condicion = false;
            console.log(condicion);
            break;
        } else {
            condicion = true;
            console.log(condicion);
        }
    }
    if (condicion) {
        console.log(p1.esFuerte());
        if (p1.esFuerte()) {
            main[0].classList.add("display-none");
            main[1].classList.remove("display-none");
        } else {
            alerta[1].classList.remove("display-none");
            alerta[0].classList.add("display-none");
        }
    } else {
        alerta[0].classList.remove("display-none");
    }
    for (i = 0; i < datosArray.length; i++) {
        datos[i].innerHTML = datos[i].innerHTML + " " + datosArray[i].value;
    }
};
enviar[1].onclick = function() {
    for (i = 0; i < datosArray.length; i++) {
        datos[i].innerHTML = datos[i].innerHTML.replace(datosArray[i].value, " ");
    }
    main[0].classList.remove("display-none");
    main[1].classList.add("display-none");
};
viewPassword[0].onclick = function() {
    if (inputs[1].type == "password") {
        inputs[1].type = "text";
    } else {
        inputs[1].type = "password";
    }
};