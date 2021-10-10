// CEmpleado.js
let categoria = [
    "Administrador de Redes",
    "Administrador de Sistemas Operativos",
    "Administrador de Bases de Datos",
    "Administrador de Seguridad",
    "Auditor de Sistemas",
    "Soporte Técnico",
    "Operador / Data Entry ",
    "Mesa de Ayuda",
    "Planificación",
    "Consultor en IT",
    "Especialista en IT",
    "Entrenador en IT",
    "Consultor Business Intelligence",
    "Community Manager",
    "Implementador",
    "Implementador ERP",

    "Investigación y Desarrollo(I + D)",
    "Analista de Sistemas",
    "Arquitecto de Soluciones IT",
    "Diseñador de Software",
    "Diseñador Web y Multimedia",
    "Programador",
    "Analista QA - Tester",
    "Responsable de Calidad",
    "Ingeniero de Software",
    "Desarrollador Mobile",
    "Desarrollador Web",
    "Desarrollador de Juegos - Game Developer",
    "Diseñador de Juegos - Game Designer",
    "Diseñador de Niveles de Juegos - Level Designer",
    "Access Management",
    "Analista UX(Usabilidad)",
    "Productor Digital",
    "Analytics Enablement Analyst",
    "Analytics Analyst",

    "Preventa",
    "Ventas",
    "Marketing",

    "Administración, Finanzas y Contabilidad",
    "Recursos Humanos",
    "Relaciones Públicas, Comunicaciones y Asuntos Institucionales",
    "Servicios Generales y Mantenimiento",
    "Recepcionista",

    "Analista de Proyectos ",
    "Asistente",
    "Líder de Proyectos(PM)",
    "Analista de Negocios",
    "Administrador de Proyectos Marketing Digital ",
];
let opciones = document.querySelector("#opciones");
for (let x = 0; x < categoria.length; x++) {
    let opcion = document.createElement("div");
    opcion.innerHTML =
        "<a href='# ' class='opcion'><div class= 'contenido-opcion'><div class='textos'> <p class= 'titulo '>" +
        categoria[x] +
        "</p></div></div></a>";
    opciones.appendChild(opcion);
}

let junior = [
    44203.52, 45926.52, 47075.2, 51286.99, 45160.74, 35779.92, 34631.25, 35397.03,
    43188.86, 48989.65, 44586.41, 48032.42, 56897.81, 38872.5, 56544.38, 47237.19,
    38460.16, 46117.97, 50904.1, 48989.65, 48032.42, 46117.97, 35397.03, 49946.88,
    55307.34, 43761.72, 42937.03, 44704.22, 47225.41, 42289.06, 36987.5, 42053.44,
    43246.29, 43246.29, 43246.29, 36162.81, 40374.61, 43514.31, 38843.05,
    40374.61, 44203.52, 36545.7, 34631.25, 47075.2, 43437.73, 56073.13, 62317.19,
    43246.29,
];
let semiSenior = [
    48223.87, 50119.18, 51382.71, 56015.69, 49276.82, 38957.91, 37694.38,
    38536.73, 47107.74, 53488.61, 48645.05, 52435.66, 62187.59, 42359.75,
    61798.81, 51560.91, 41906.17, 50329.77, 55594.51, 53488.61, 52435.66,
    50329.77, 38536.73, 54541.56, 60438.08, 47737.89, 46830.73, 48774.64,
    51547.95, 46117.97, 40286.25, 45858.78, 47170.92, 47170.92, 47170.92,
    39379.09, 44012.07, 47465.74, 42327.35, 44012.07, 48223.87, 39800.27,
    37694.38, 51382.71, 47381.51, 61280.44, 68148.91, 47170.92,
];
let senior = [
    52244.22, 54311.83, 55690.23, 60744.39, 53392.89, 42135.91, 40757.5, 41676.44,
    51026.63, 57987.58, 52703.69, 56838.91, 67477.38, 45847.0, 67053.25, 55884.63,
    45352.19, 54541.56, 60284.92, 57987.58, 56838.91, 54541.56, 41676.44,
    59136.25, 65568.81, 51714.06, 50724.44, 52845.06, 55870.49, 49946.88, 43585.0,
    49664.13, 51095.55, 51095.55, 51095.55, 42595.38, 47649.53, 51417.18,
    45811.66, 47649.53, 52244.22, 43054.84, 40757.5, 55690.23, 51325.28, 66487.75,
    73980.63, 51095.55,
];

let container = document.querySelectorAll(".main");

const OpcionesTotales = document.querySelectorAll(".opcion");
const hiddenInput = document.querySelector("#inputSelect");
const contenidoSelect = document.querySelector("#select .contenido-select");
const opcionSpec = document.querySelectorAll(
    "#opcionesSpec > .categoria >.section__opcion"
);
console.log(opcionSpec);
const idiomaExtranjero = document.querySelectorAll(
    "#idiomaExtranjero > .categoria >.section__opcion"
);
const presentismo = document.querySelectorAll(
    "#presentismo > .categoria >.section__opcion"
);
const tituloDeGrado = document.querySelectorAll(
    "#tituloDeGrado > .categoria >.section__opcion"
);
const funcion = document.querySelectorAll(
    "#funcion > .categoria >.section__opcion"
);
let section__opcion = document.querySelector(".active2 > p");
const siguiente = document.getElementById("siguiente");
const siguiente2 = document.getElementById("siguiente2");

const nombre = document.getElementById("nombre");
const antiguedad = document.getElementById("antiguedad");
const hijosConGuarderia = document.getElementById("hijosConGuarderia");
const kmPorMovilidadPropia = document.getElementById("kmPorMovilidadPropia");
const adicionalesObjetivos = document.getElementById("adicionalesObjetivos");

let condicionOpcionSpec = false;
let condicionIdiomaExtranjero = false;
let condicionPresentismo = false;
let condicionTituloDeGrado = false;
let condicionFuncion = false;

let condicion2 = false;
let condicion3 = false;
let condicion10 = false;
let condicion11 = false;
let condicion12 = false;
let condicion13 = false;

let sueldoBasico = 0;