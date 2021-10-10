class CEmpleado {
    constructor(
        apellidoYNombre,
        categoria,
        sueldoBasico,
        antiguedad,
        idiomaExtranjero,
        tituloDeGrado,
        hijosConGuarderia,
        presentismo,
        funcion,
        kmPorMovilidadPropia,
        adicionalesObjetivos

    ) {
        this.apellidoYNombre = apellidoYNombre;
        this.categoria = categoria;
        this.sueldoBasico = sueldoBasico;
        this.antiguedad = antiguedad;
        this.idiomaExtranjero = idiomaExtranjero;
        this.tituloDeGrado = tituloDeGrado;
        this.hijosConGuarderia = hijosConGuarderia;
        this.presentismo = presentismo;
        this.funcion = funcion;
        this.kmPorMovilidadPropia = kmPorMovilidadPropia;
        this.adicionalesObjetivos = adicionalesObjetivos;
    }
    calcularSueldoAdicional() {
        let unoPorciento = parseInt(this.sueldoBasico) / 100;
        let sueldoBruto = 0;
        let antiguedadAdicional = parseInt(this.antiguedad) * unoPorciento;
        let hijosConGuarderiaAdicional = parseInt(this.hijosConGuarderia) * 5000;
        let kmPorMovilidadPropiaAdicional = parseInt(this.kmPorMovilidadPropia) * 18.53;
        let idiomaExtranjeroAdicional = 0;
        let tituloDeGradoAdicional = 0;
        let presentismoAdicional = 0;
        let funcionAdicional = 0

        if (this.idiomaExtranjero == "Si") {
            idiomaExtranjeroAdicional = 8 * unoPorciento;
        }
        if (this.tituloDeGrado == "Si") {
            tituloDeGradoAdicional = 12 * unoPorciento;
        }
        if (this.presentismo == "Si") {
            presentismoAdicional = 2 * unoPorciento;
        }
        if (this.funcion == "Cordinador") {
            funcionAdicional = 10 * unoPorciento;
        }
        if (this.funcion == "Lider de equipo") {
            funcionAdicional = 20 * unoPorciento;
        }
        if (this.funcion == "Otro") {
            funcionAdicional = 0 * unoPorciento;
        }
        sueldoBruto =
            parseInt(this.sueldoBasico) +
            antiguedadAdicional +
            hijosConGuarderiaAdicional +
            kmPorMovilidadPropiaAdicional +
            idiomaExtranjeroAdicional +
            tituloDeGradoAdicional +
            presentismoAdicional +
            funcionAdicional +
            parseInt(this.adicionalesObjetivos);
        return sueldoBruto;
    }
    arrayAtributos() {
        let atributosCEmpleado = [
            this.apellidoYNombre,
            this.categoria,
            this.sueldoBasico,
            this.antiguedad,
            this.idiomaExtranjero,
            this.tituloDeGrado,
            this.hijosConGuarderia,
            this.presentismo,
            this.funcion,
            this.kmPorMovilidadPropia,
            this.adicionalesObjetivos
        ];
        return atributosCEmpleado;
    }
}

siguiente.addEventListener("click", () => {
    añadirEventos();
    section__opcion = document.querySelectorAll(".active2 > p");
    container[0].classList.add("display-none");
    container[1].classList.remove("display-none");

    console.log(nombre.value);
    console.log(hiddenInput.value);
    console.log(section__opcion[0].textContent);

    switch (section__opcion[0].textContent) {
        case "Junior":
            sueldoBasico = junior[categoria.indexOf(hiddenInput.value)];
            console.log(sueldoBasico);
            break;
        case "Semi-Senior":
            sueldoBasico = semiSenior[categoria.indexOf(hiddenInput.value)];
            console.log(sueldoBasico);
            break;
        case "Senior":
            sueldoBasico = senior[categoria.indexOf(hiddenInput.value)];
            console.log(sueldoBasico);
            break;
    }

});
siguiente2.addEventListener("click", () => {

    container[1].classList.add("display-none");
    container[2].classList.remove("display-none");
    section__opcion = document.querySelectorAll(".active2 > p");
    const e1 = new CEmpleado(
        nombre.value,
        hiddenInput.value + " - " + section__opcion[0].textContent,
        sueldoBasico,
        antiguedad.value,
        section__opcion[1].textContent,
        section__opcion[3].textContent,
        hijosConGuarderia.value,
        section__opcion[2].textContent,
        section__opcion[4].textContent,
        kmPorMovilidadPropia.value,
        adicionalesObjetivos.value
    );
    let resultados = document.getElementById("resultados");
    let sueldoAdicional = Math.floor(e1.calcularSueldoAdicional());
    let arrayAtributos = e1.arrayAtributos();
    let arrayAtributos2 = ["Nombre: ", "Categoria: ", "Sueldo basico: ", "Antiguedad: ", "Idioma extranjero: ", "Titulo de grado: ", "Hijos con guarderia ", "Presentismo: ", "Funcion: ", "Km por movilidad propia: ", "Adicionales objetivos: "];
    let resultadoSueldoBruto = document.createElement("div");

    resultadoSueldoBruto.innerHTML = "<p class='subTitulo fw-bold text-center'>Su sueldo bruto es de " + sueldoAdicional + " pesos </p>";
    container[2].appendChild(resultadoSueldoBruto);
    for (let i = 0; i < arrayAtributos.length; i++) {
        let datosEmpleado = document.createElement("div");
        datosEmpleado.innerHTML =
            "<p class='subTitulo fw-bold text-center'>" +
            arrayAtributos2[i] + arrayAtributos[i] + "</p>";
        resultados.appendChild(datosEmpleado);
    }


});