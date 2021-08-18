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