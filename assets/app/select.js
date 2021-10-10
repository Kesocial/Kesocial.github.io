// select.js
siguiente.disabled = true;
siguiente2.disabled = true;

function añadirEventos() {
    antiguedad.addEventListener("keyup", () => {
        if (
            antiguedad.value == null ||
            antiguedad.value.length == 0 ||
            /^\s+$/.test(antiguedad.value)
        ) {
            condicion10 = false;
        } else {
            condicion10 = true;
        }
        siguienteActivar2(siguiente2);
    });
    hijosConGuarderia.addEventListener("keyup", () => {
        if (
            hijosConGuarderia.value == null ||
            hijosConGuarderia.value.length == 0 ||
            /^\s+$/.test(hijosConGuarderia.value)
        ) {
            condicion11 = false;
        } else {
            condicion11 = true;
        }
        siguienteActivar2(siguiente2);
    });
    kmPorMovilidadPropia.addEventListener("keyup", () => {
        if (
            kmPorMovilidadPropia.value == null ||
            kmPorMovilidadPropia.value.length == 0 ||
            /^\s+$/.test(kmPorMovilidadPropia.value)
        ) {
            condicion12 = false;
        } else {
            condicion12 = true;
        }
        siguienteActivar2(siguiente2);
    });
    adicionalesObjetivos.addEventListener("keyup", () => {
        if (
            adicionalesObjetivos.value == null ||
            adicionalesObjetivos.value.length == 0 ||
            /^\s+$/.test(adicionalesObjetivos.value)
        ) {
            condicion13 = false;
        } else {
            condicion13 = true;
        }
        siguienteActivar2(siguiente2);
    });
}

function siguienteActivar(button) {
    if (condicionOpcionSpec == true && condicion2 == true && condicion3 == true) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}

function siguienteActivar2(button) {
    if (
        condicion10 == true &&
        condicion11 == true &&
        condicion12 == true &&
        condicion13 == true &&
        condicionIdiomaExtranjero == true &&
        condicionPresentismo == true &&
        condicionTituloDeGrado == true &&
        condicionFuncion == true
    ) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}

OpcionesTotales.forEach((opcion) => {
    opcion.addEventListener("click", (e) => {
        e.preventDefault();
        contenidoSelect.innerHTML = e.currentTarget.innerHTML;
        select.classList.toggle("active2");
        opciones.classList.toggle("active2");
        hiddenInput.value = e.currentTarget.querySelector(".titulo").innerText;
        condicion3 = true;
        siguienteActivar(siguiente);
    });
});

select.addEventListener("click", () => {
    select.classList.toggle("active2");
    opciones.classList.toggle("active2");
});
command_categorias(opcionSpec);
command_categorias(idiomaExtranjero);
command_categorias(presentismo);
command_categorias(tituloDeGrado);
command_categorias(funcion);

function command_categorias(element) {
    element.forEach((element1) => {
        element1.addEventListener("click", () => {
            element.forEach((element2) => {
                if (element1 == element2) {
                    element2.classList.add("active2");
                } else {
                    element2.classList.remove("active2");
                }
            });
            if (element == opcionSpec) {
                condicionOpcionSpec = true;
            }
            if (element == idiomaExtranjero) {
                condicionIdiomaExtranjero = true;
            }
            if (element == presentismo) {
                condicionPresentismo = true;
            }
            if (element == tituloDeGrado) {
                condicionTituloDeGrado = true;
            }
            if (element == funcion) {
                condicionFuncion = true;
            }

            siguienteActivar(siguiente);
            siguienteActivar2(siguiente2);
        });
    });
}

nombre.addEventListener("keyup", () => {
    if (
        nombre.value == null ||
        nombre.value.length == 0 ||
        /^\s+$/.test(nombre.value)
    ) {
        condicion2 = false;
    } else {
        condicion2 = true;
    }
    siguienteActivar(siguiente);
});