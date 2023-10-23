
let Br = document.getElementById("BarPl1");
let Br2 = document.getElementById("BarPl2");
let jugador1 = "";
let jugador2 = "";
let aux = 2;


const CPlayer1 = document.getElementById("GuarPlay1");
CPlayer1.addEventListener("click", function ()  {
    jugador1 = Br.value;
});
const DPlayer1 = document.getElementById("DeltPlay1");
DPlayer1.addEventListener("click", function ()  {
    Br.value = "";
    jugador1 = "";
});
const CPlayer2 = document.getElementById("GuarPlay2");
CPlayer2.addEventListener("click", function ()  {
    jugador2 = Br2.value;
});

const DPlayer2 = document.getElementById("DeltPlay2");
DPlayer2.addEventListener("click", function ()  {
    Br2.value = "";
    jugador2 = "";
});

document.getElementById("btnJugar").addEventListener("click", function () {
    const nombreJugador1 = jugador1;
    const nombreJugador2 = jugador2;

    const urlNombreJugadores = `juego.html?nombrejugador1=${jugador1}&nombrejugador2=${jugador2}`;
    
    window.location.href = urlNombreJugadores;
});


const urlParametros = new URLSearchParams(window.location.search);

const nombreJugador1 = urlParams.get("jugador1");
const nombreJugador2 = urlParams.get("jugador2");

document.getElementById("nombreJugador1").textContent = nombreJugador1;
document.getElementById("nombreJugador2").textContent = nombreJugador2;



const Turn = document.getElementById("turnoDe");
Turn.addEventListener("click", function ()  {
    if (turno % 2 == 0) {
        Turn.textContent = "Es turno de:" + jugador1
    }
    else if (turno % 2 == 1) {
        Turn.textContent = "Es turno de:" + jugador2
    }
    aux ++;
});






