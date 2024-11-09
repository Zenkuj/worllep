let intentos = 5;
let palabra;

fetch("https://random-word.ryanrk.com/api/en/word/random/?length=5")
    .then(response => response.json())
    .then(response => {
        console.log(response[0].toUpperCase());
        palabra = response[0].toUpperCase();
    })
    .catch(err => {
        console.log("Ocurrió un error");
        let listapalabras = ["APPLE", "MOUSE", "HOUSE", "TRACE"];
        let posicion = Math.floor(Math.random() * listapalabras.length);
        palabra = listapalabras[posicion];
    });

const BUTTON = document.getElementById("guess-button");
BUTTON.addEventListener("click", intentar);

function intentar() {
    console.log("click");
    const intento = leerIntento();
    if (intento.length !== 5) {
        alert("Debe ingresar solo palabras de 5 letras.");
        return;
    }
    intentos--;

    const GRID = document.getElementById("grid");
    const ROW = document.createElement("div");
    ROW.className = "row";

    for (let i in intento) {
        const SPAN = document.createElement("span");
        SPAN.className = "letter";
        SPAN.innerHTML = intento[i];
        if (palabra[i] == intento[i]) {
            SPAN.style.backgroundColor = "#79b851";
            console.log(intento[i], "verde");
        } else if (palabra.includes(intento[i])) {
            SPAN.style.backgroundColor = "#f3c237";
            console.log(intento[i], "amarillo");
        } else {
            SPAN.style.backgroundColor = "#a4ec4";
            console.log(intento[i], "gris");
        }
        ROW.appendChild(SPAN);
    }
    GRID.appendChild(ROW);

    if (intento === palabra) {
        console.log("ganaste");
        terminar("<h1>¡GANASTE! 😀</h1>");
        return;
    }

    if (intentos === 0) {
        console.log("perdiste");
        terminar("<h1>¡PERDISTE! 😖</h1>");
        return;
    }

    console.log("Intentos restantes:", intentos);
}

function leerIntento() {
    const INTENTO = document.getElementById("guess-input").value.toUpperCase();
    return INTENTO;
}

function terminar(mensaje) {
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    BUTTON.disabled = true;
    let contenedor = document.getElementById("guesses");
    contenedor.innerHTML = mensaje; const botonReintentar = document.getElementById('recargar');
    botonReintentar.style.display = "block";
}
const botonReintentar = document.getElementById('recargar');
botonReintentar.addEventListener('click', function() {
    location.reload();
});