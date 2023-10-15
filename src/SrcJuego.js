const Tec1 = document.getElementById("tecla1");
const Tec2 = document.getElementById("tecla2");
const Tec3 = document.getElementById("tecla3");
const Tec4 = document.getElementById("tecla4");
const Tec5 = document.getElementById("tecla5");
const Tec6 = document.getElementById("tecla6");
const Tec7 = document.getElementById("tecla7");
const Tec8 = document.getElementById("tecla8");
const Tec9 = document.getElementById("tecla9");
const Gan = document.getElementById("ganaste");
const turn = document.getElementById("turnoDe");
let turno = 3;
let tablero = [];
Tec1.addEventListener("click", function ()  {
    if (Tec1.textContent == "" && turno %2 == 1) {
        Tec1.textContent = "x"
        tablero = [
            [Tec1.textContent,Tec2.textContent,Tec3.textContent],
            [Tec4.textContent,Tec5.textContent,Tec6.textContent],
            [Tec7.textContent,Tec8.textContent,Tec9.textContent]
        ];
    }
    else if (Tec1.textContent == "" && turno % 2 == 0) {
        Tec1.textContent = "O"
        tablero = [
            [Tec1.textContent,Tec2.textContent,Tec3.textContent],
            [Tec4.textContent,Tec5.textContent,Tec6.textContent],
            [Tec7.textContent,Tec8.textContent,Tec9.textContent]
        ];
    }
    if (Tec1.textContent == "x" && Tec2.textContent == "x" && Tec3.textContent == "x") {
        Gan.textContent = "Felicitaciones jugador 1 ¡Has Ganado!"
    }    
    if (Tec1.textContent == "x" && Tec4.textContent == "x" && Tec7.textContent == "x") {
        Gan.textContent = "Felicitaciones jugador 1 ¡Has Ganado!"
    }
    if (Tec1.textContent == "x" && Tec5.textContent == "x" && Tec9.textContent == "x") {
        Gan.textContent = "Felicitaciones jugador 1 ¡Has Ganado!"
    }
    if (Tec1.textContent == "O" && Tec2.textContent == "O" && Tec3.textContent == "O") {
        Gan.textContent = "Felicitaciones jugador 2 ¡Has Ganado!"
    }
    if (Tec1.textContent == "O" && Tec4.textContent == "O" && Tec7.textContent == "O") {
        Gan.textContent = "Felicitaciones jugador 2 ¡Has Ganado!"
    }
    if (Tec1.textContent == "O" && Tec5.textContent == "O" && Tec9.textContent == "O") {
        Gan.textContent = "Felicitaciones jugador 2 ¡Has Ganado!"
    }
    if (turno % 2 == 0) {
        turn.textContent ="Es el turno de : X"
    }
    else{
        turn.textContent ="Es el turno de : O"
    }
    turno ++;
});

Tec2.addEventListener("click", function ()  {
    if (Tec2.textContent == "" && turno %2 == 1) {
        Tec2.textContent = "x"
        tablero = [
            [Tec1.textContent,Tec2.textContent,Tec3.textContent],
            [Tec4.textContent,Tec5.textContent,Tec6.textContent],
            [Tec7.textContent,Tec8.textContent,Tec9.textContent]
        ];
    }
    else if (Tec2.textContent == "" && turno % 2 == 0) {
        Tec2.textContent = "O"
        tablero = [
            [Tec1.textContent,Tec2.textContent,Tec3.textContent],
            [Tec4.textContent,Tec5.textContent,Tec6.textContent],
            [Tec7.textContent,Tec8.textContent,Tec9.textContent]
        ];
    }
    if (Tec1.textContent == "x" && Tec2.textContent == "x" && Tec3.textContent == "x") {
        Gan.textContent = "Felicitaciones jugador 1 ¡Has Ganado!"
    }    
    if (Tec2.textContent == "x" && Tec5.textContent == "x" && Tec8.textContent == "x") {
        Gan.textContent = "Felicitaciones jugador 1 ¡Has Ganado!"
    }
    if (Tec1.textContent == "O" && Tec2.textContent == "O" && Tec3.textContent == "O") {
        Gan.textContent = "Felicitaciones jugador 2 ¡Has Ganado!"
    }
    if (Tec2.textContent == "O" && Tec5.textContent == "O" && Tec8.textContent == "O") {
        Gan.textContent = "Felicitaciones jugador 2 ¡Has Ganado!"
    }
    if (turno % 2 == 0) {
        turn.textContent ="Es el turno de : X"
    }
    else{
        turn.textContent ="Es el turno de : O"
    }
    turno ++;
});

Tec3.addEventListener("click", function ()  {
    if (Tec3.textContent == "" && turno %2 == 1) {
        Tec3.textContent = "x"
        tablero = [
            [Tec1.textContent,Tec2.textContent,Tec3.textContent],
            [Tec4.textContent,Tec5.textContent,Tec6.textContent],
            [Tec7.textContent,Tec8.textContent,Tec9.textContent]
        ];
    }
    else if (Tec3.textContent == "" && turno % 2 == 0) {
        Tec3.textContent = "O"
        tablero = [
            [Tec1.textContent,Tec2.textContent,Tec3.textContent],
            [Tec4.textContent,Tec5.textContent,Tec6.textContent],
            [Tec7.textContent,Tec8.textContent,Tec9.textContent]
        ];
    }
    if (Tec3.textContent == "x" && Tec2.textContent == "x" && Tec1.textContent == "x") {
        Gan.textContent = "Felicitaciones jugador 1 ¡Has Ganado!"
    }    
    if (Tec3.textContent == "x" && Tec5.textContent == "x" && Tec7.textContent == "x") {
        Gan.textContent = "Felicitaciones jugador 1 ¡Has Ganado!"
    }
    if (Tec3.textContent == "x" && Tec6.textContent == "x" && Tec9.textContent == "x") {
        Gan.textContent = "Felicitaciones jugador 1 ¡Has Ganado!"
    }
    if (Tec3.textContent == "O" && Tec2.textContent == "O" && Tec1.textContent == "O") {
        Gan.textContent = "Felicitaciones jugador 2 ¡Has Ganado!"
    }
    if (Tec3.textContent == "O" && Tec5.textContent == "O" && Tec7.textContent == "O") {
        Gan.textContent = "Felicitaciones jugador 2 ¡Has Ganado!"
    }
    if (Tec3.textContent == "O" && Tec6.textContent == "O" && Tec9.textContent == "O") {
        Gan.textContent = "Felicitaciones jugador 2 ¡Has Ganado!"
    }
    if (turno % 2 == 0) {
        turn.textContent ="Es el turno de : X"
    }
    else{
        turn.textContent ="Es el turno de : O"
    }
    turno ++;
});

Tec4.addEventListener("click", function ()  {
    if (Tec4.textContent == "" && turno %2 == 1) {
        Tec4.textContent = "x"
        tablero = [
            [Tec1.textContent,Tec2.textContent,Tec3.textContent],
            [Tec4.textContent,Tec5.textContent,Tec6.textContent],
            [Tec7.textContent,Tec8.textContent,Tec9.textContent]
        ];
    }
    else if (Tec4.textContent == "" && turno % 2 == 0) {
        Tec4.textContent = "O"
        tablero = [
            [Tec1.textContent,Tec2.textContent,Tec3.textContent],
            [Tec4.textContent,Tec5.textContent,Tec6.textContent],
            [Tec7.textContent,Tec8.textContent,Tec9.textContent]
        ];
    }
    if (Tec4.textContent == "x" && Tec1.textContent == "x" && Tec7.textContent == "x") {
        Gan.textContent = "Felicitaciones jugador 1 ¡Has Ganado!"
    }    
    if (Tec4.textContent == "x" && Tec5.textContent == "x" && Tec6.textContent == "x") {
        Gan.textContent = "Felicitaciones jugador 1 ¡Has Ganado!"
    }
    if (Tec4.textContent == "O" && Tec1.textContent == "O" && Tec7.textContent == "O") {
        Gan.textContent = "Felicitaciones jugador 2 ¡Has Ganado!"
    }
    if (Tec4.textContent == "O" && Tec5.textContent == "O" && Tec6.textContent == "O") {
        Gan.textContent = "Felicitaciones jugador 2 ¡Has Ganado!"
    }
    if (turno % 2 == 0) {
        turn.textContent ="Es el turno de : X"
    }
    else{
        turn.textContent ="Es el turno de : O"
    }
    turno ++;
});

Tec5.addEventListener("click", function ()  {
    if (Tec5.textContent == "" && turno %2 == 1) {
        Tec5.textContent = "x"
        tablero = [
            [Tec1.textContent,Tec2.textContent,Tec3.textContent],
            [Tec4.textContent,Tec5.textContent,Tec6.textContent],
            [Tec7.textContent,Tec8.textContent,Tec9.textContent]
        ];
    }
    else if (Tec5.textContent == "" && turno % 2 == 0) {
        Tec5.textContent = "O"
        tablero = [
            [Tec1.textContent,Tec2.textContent,Tec3.textContent],
            [Tec4.textContent,Tec5.textContent,Tec6.textContent],
            [Tec7.textContent,Tec8.textContent,Tec9.textContent]
        ];
    }
    if (Tec1.textContent == "x" && Tec5.textContent == "x" && Tec9.textContent == "x") {
        Gan.textContent = "Felicitaciones jugador 1 ¡Has Ganado!"
    }    
    if (Tec2.textContent == "x" && Tec5.textContent == "x" && Tec8.textContent == "x") {
        Gan.textContent = "Felicitaciones jugador 1 ¡Has Ganado!"
    }
    if (Tec5.textContent == "x" && Tec7.textContent == "x" && Tec3.textContent == "x") {
        Gan.textContent = "Felicitaciones jugador 1 ¡Has Ganado!"
    }    
    if (Tec4.textContent == "x" && Tec5.textContent == "x" && Tec6.textContent == "x") {
        Gan.textContent = "Felicitaciones jugador 1 ¡Has Ganado!"
    }
    if (Tec1.textContent == "O" && Tec5.textContent == "O" && Tec9.textContent == "O") {
        Gan.textContent = "Felicitaciones jugador 2 ¡Has Ganado!"
    }    
    if (Tec2.textContent == "O" && Tec5.textContent == "O" && Tec8.textContent == "O") {
        Gan.textContent = "Felicitaciones jugador 2 ¡Has Ganado!"
    }
    if (Tec5.textContent == "O" && Tec7.textContent == "O" && Tec3.textContent == "O") {
        Gan.textContent = "Felicitaciones jugador 2 ¡Has Ganado!"
    }    
    if (Tec4.textContent == "O" && Tec5.textContent == "O" && Tec6.textContent == "O") {
        Gan.textContent = "Felicitaciones jugador 2 ¡Has Ganado!"
    } 
    if (turno % 2 == 0) {
        turn.textContent ="Es el turno de : X"
    }
    else{
        turn.textContent ="Es el turno de : O"
    }
    turno ++;
});

Tec6.addEventListener("click", function ()  {
    if (Tec6.textContent == "" && turno %2 == 1) {
        Tec6.textContent = "x"
        tablero = [
            [Tec1.textContent,Tec2.textContent,Tec3.textContent],
            [Tec4.textContent,Tec5.textContent,Tec6.textContent],
            [Tec7.textContent,Tec8.textContent,Tec9.textContent]
        ];
    }
    else if (Tec6.textContent == "" && turno % 2 == 0) {
        Tec6.textContent = "O"
        tablero = [
            [Tec1.textContent,Tec2.textContent,Tec3.textContent],
            [Tec4.textContent,Tec5.textContent,Tec6.textContent],
            [Tec7.textContent,Tec8.textContent,Tec9.textContent]
        ];
    }
    if (Tec6.textContent == "x" && Tec9.textContent == "x" && Tec3.textContent == "x") {
        Gan.textContent = "Felicitaciones jugador 1 ¡Has Ganado!"
    }    
    if (Tec4.textContent == "x" && Tec5.textContent == "x" && Tec6.textContent == "x") {
        Gan.textContent = "Felicitaciones jugador 1 ¡Has Ganado!"
    }
    if (Tec3.textContent == "O" && Tec6.textContent == "O" && Tec9.textContent == "O") {
        Gan.textContent = "Felicitaciones jugador 2 ¡Has Ganado!"
    }
    if (Tec4.textContent == "O" && Tec5.textContent == "O" && Tec6.textContent == "O") {
        Gan.textContent = "Felicitaciones jugador 2 ¡Has Ganado!"
    }
    if (turno % 2 == 0) {
        turn.textContent ="Es el turno de : X"
    }
    else{
        turn.textContent ="Es el turno de : O"
    }
    turno ++;
});


Tec7.addEventListener("click", function ()  {
    if (Tec7.textContent == "" && turno %2 == 1) {
        Tec7.textContent = "x"
        tablero = [
            [Tec1.textContent,Tec2.textContent,Tec3.textContent],
            [Tec4.textContent,Tec5.textContent,Tec6.textContent],
            [Tec7.textContent,Tec8.textContent,Tec9.textContent]
        ];
    }
    else if (Tec7.textContent == "" && turno % 2 == 0) {
        Tec7.textContent = "O"
        tablero = [
            [Tec1.textContent,Tec2.textContent,Tec3.textContent],
            [Tec4.textContent,Tec5.textContent,Tec6.textContent],
            [Tec7.textContent,Tec8.textContent,Tec9.textContent]
        ];
    }
    if (Tec7.textContent == "x" && Tec5.textContent == "x" && Tec3.textContent == "x") {
        Gan.textContent = "Felicitaciones jugador 1 ¡Has Ganado!"
    }    
    if (Tec1.textContent == "x" && Tec4.textContent == "x" && Tec7.textContent == "x") {
        Gan.textContent = "Felicitaciones jugador 1 ¡Has Ganado!"
    }
    if (Tec7.textContent == "x" && Tec8.textContent == "x" && Tec9.textContent == "x") {
        Gan.textContent = "Felicitaciones jugador 1 ¡Has Ganado!"
    }
    if (Tec7.textContent == "O" && Tec5.textContent == "O" && Tec3.textContent == "O") {
        Gan.textContent = "Felicitaciones jugador 2 ¡Has Ganado!"
    }    
    if (Tec1.textContent == "O" && Tec4.textContent == "O" && Tec7.textContent == "O") {
        Gan.textContent = "Felicitaciones jugador 2 ¡Has Ganado!"
    }
    if (Tec7.textContent == "O" && Tec8.textContent == "O" && Tec9.textContent == "O") {
        Gan.textContent = "Felicitaciones jugador 2 ¡Has Ganado!"
    }
    if (turno % 2 == 0) {
        turn.textContent ="Es el turno de : X"
    }
    else{
        turn.textContent ="Es el turno de : O"
    }
    turno ++;
});

Tec8.addEventListener("click", function ()  {
    if (Tec8.textContent == "" && turno %2 == 1) {
        Tec8.textContent = "x"
        tablero = [
            [Tec1.textContent,Tec2.textContent,Tec3.textContent],
            [Tec4.textContent,Tec5.textContent,Tec6.textContent],
            [Tec7.textContent,Tec8.textContent,Tec9.textContent]
        ];
    }
    else if (Tec8.textContent == "" && turno % 2 == 0) {
        Tec8.textContent = "O"
        tablero = [
            [Tec1.textContent,Tec2.textContent,Tec3.textContent],
            [Tec4.textContent,Tec5.textContent,Tec6.textContent],
            [Tec7.textContent,Tec8.textContent,Tec9.textContent]
        ];
    }
    if (Tec2.textContent == "x" && Tec5.textContent == "x" && Tec8.textContent == "x") {
        Gan.textContent = "Felicitaciones jugador 1 ¡Has Ganado!"
    }    
    if (Tec7.textContent == "x" && Tec8.textContent == "x" && Tec9.textContent == "x") {
        Gan.textContent = "Felicitaciones jugador 1 ¡Has Ganado!"
    }
    if (Tec2.textContent == "O" && Tec5.textContent == "O" && Tec8.textContent == "O") {
        Gan.textContent = "Felicitaciones jugador 2 ¡Has Ganado!"
    }    
    if (Tec7.textContent == "O" && Tec8.textContent == "O" && Tec9.textContent == "O") {
        Gan.textContent = "Felicitaciones jugador 2 ¡Has Ganado!"
    }
    if (turno % 2 == 0) {
        turn.textContent ="Es el turno de : X"
    }
    else{
        turn.textContent ="Es el turno de : O"
    }
    turno ++;
});

Tec9.addEventListener("click", function ()  {
    if (Tec9.textContent == "" && turno %2 == 1) {
        Tec9.textContent = "x"
        tablero = [
            [Tec1.textContent,Tec2.textContent,Tec3.textContent],
            [Tec4.textContent,Tec5.textContent,Tec6.textContent],
            [Tec7.textContent,Tec8.textContent,Tec9.textContent]
        ];
    }
    else if (Tec9.textContent == "" && turno % 2 == 0) {
        Tec9.textContent = "O"
        tablero = [
            [Tec1.textContent,Tec2.textContent,Tec3.textContent],
            [Tec4.textContent,Tec5.textContent,Tec6.textContent],
            [Tec7.textContent,Tec8.textContent,Tec9.textContent]
        ];
    }
    if (Tec1.textContent == "x" && Tec5.textContent == "x" && Tec9.textContent == "x") {
        Gan.textContent = "Felicitaciones jugador 1 ¡Has Ganado!"
    }    
    if (Tec7.textContent == "x" && Tec8.textContent == "x" && Tec9.textContent == "x") {
        Gan.textContent = "Felicitaciones jugador 1 ¡Has Ganado!"
    }
    if (Tec1.textContent == "O" && Tec5.textContent == "O" && Tec9.textContent == "O") {
        Gan.textContent = "Felicitaciones jugador 2 ¡Has Ganado!"
    }    
    if (Tec7.textContent == "O" && Tec8.textContent == "O" && Tec9.textContent == "O") {
        Gan.textContent = "Felicitaciones jugador 2 ¡Has Ganado!"
    }
    if (turno % 2 == 0) {
        turn.textContent ="Es el turno de : X"
    }
    else{
        turn.textContent ="Es el turno de : O"
    }
    turno ++;
});



