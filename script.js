let Br = document.getElementById("BarPl1");
let Br2 = document.getElementById("BarPl2");

let jugador1 = "";
let jugador2 = "";

const CPlayer1 = document.getElementById("GuarPlay1");
CPlayer1.addEventListener("click", function ()  {
    jugador1 = Br.value;
    return jugador1
});
const DPlayer1 = document.getElementById("DeltPlay1");
DPlayer1.addEventListener("click", function ()  {
    Br.value = "";
    jugador1 = "";
    return jugador1
});
const CPlayer2 = document.getElementById("GuarPlay2");
CPlayer2.addEventListener("click", function ()  {
    jugador2 = Br2.value;
    return jugador2
});

const DPlayer2 = document.getElementById("DeltPlay2");
DPlayer2.addEventListener("click", function ()  {
    Br2.value = "";
    jugador2 = "";
    return jugador2
});
