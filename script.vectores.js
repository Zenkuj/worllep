let intentos = 6;
//let palabra = "APPLE";
let listaPalabras = ["TIGER","BEACH","APPLE","MOUSE","HOUSE","WORLD"];
let indice = Math.floor(Math.random()*listaPalabras.length);
let palabra = listaPalabras[indice];

console.log(palabra);



console.log(palabra);
const BUTTON = document.getElementById("guess-button"); 
BUTTON.addEventListener("click", intentar);          

function leerIntento(){
    const INTENTO = document.getElementById("guess-input").
    value.toUpperCase(); //lee el intento del usuario y lo retorna
     
    return INTENTO;
}

function intentar(){
    console.log("click");
    const intento = leerIntento();
    if(intento.length!==5){
        alert("Debe ingresar palabras de 5 letras ");
        return 
    }

    intentos= intentos -1;
    console.log("te quedan "+ intentos +"intentos");

    const GRID = document.getElementById("grid");
    const ROW = document.createElement("div");
    ROW.className = "row";
    console.log(ROW);
    
    for (let i in intento){
        const SPAN =document.createElement("span");
        SPAN.className= 'letter';
        SPAN.innerHTML= intento[i];
        if (palabra[i]===intento[i]){
            SPAN.style.backgroundColor="#79b851";
            console.log(intento[i],"verde");
        } else if( palabra.includes(intento[i]) ) {
            SPAN.style.backgroundColor="#f3c237";
            console.log(intento[i], "amarillo");
        } else {
            SPAN.style.backgroundColor="#a4aec4"
            console.log(intento[i], "gris");
        }
        console.log(SPAN);
        ROW.appendChild(SPAN);
    }
    GRID.appendChild(ROW);
    
    if (intento === palabra ) {
        terminar("<h1>GANASTE!🥳</h1>");
        return
    }
     if (intentos==0){
            terminar("<h1>PERDISTE!😖🤯</h1>");
        }
}

    function terminar(mensaje){ 
        const INPUT = document.getElementById("guess-input");
        INPUT.disabled = true;
        BUTTON.disabled = true;
        let contenedor = document.getElementById('guesses');
        contenedor.innerHTML = mensaje;
    }