// Creación del tablero
function iniciar() {
document.getElementById("boton").style.display="none";
document.getElementById("danubio").play();
setTimeout(aparecer,3000);
tablero.classList.add("bajar")
tablero.style.visibility="visible";

function aparecer(){
  
    for (i = 0; i <= 10; i++) {
    setTimeout("document.getElementById('pieza').style.opacity = " + (i / 10) + "", i * 300);
    // document.getElementById("pieza").style.display ="block"; 
    setTimeout(teclas,3000);
    
        }
    }
    function teclas(){
        document.onkeydown=chars;
    }
}
window.onload= function tablero(){



// Animación rey

var tamañoTablero=504;
var tamañoPieza=tamañoTablero/8;
var casillas= document.querySelectorAll(".casilla");
var left=0;
var tablero=document.getElementById("tablero");
tablero.style.width=tamañoTablero+"px";
tablero.style.height=tamañoTablero+"px";


for (i=0; i<casillas.length; i++){
 casillas[i].style.width=tamañoPieza+"px";
 casillas[i].style.height=tamañoPieza+"px";

    }
var filasTablero= [ 
[tamañoTablero-tamañoPieza], 
[tamañoTablero-2*tamañoPieza], 
[tamañoTablero-3*tamañoPieza],
[tamañoTablero-4*tamañoPieza],
[tamañoTablero-5*tamañoPieza],
[tamañoTablero-6*tamañoPieza],
[tamañoTablero-7*tamañoPieza],
[tamañoTablero-8*tamañoPieza]
]

for (i=0; i<casillas.length; i++){
   // casillas[i].addEventListener("click", coordenadas)
   if ((casillas[i].getAttribute("fila")=="uno")){
       filasTablero[0].push(casillas[i]);
   }
   if ((casillas[i].getAttribute("fila")=="dos")){
    filasTablero[1].push(casillas[i]);
}
if ((casillas[i].getAttribute("fila")=="tres")){
    filasTablero[2].push(casillas[i]);
}

if ((casillas[i].getAttribute("fila")=="cuatro")){
    filasTablero[3].push(casillas[i]);
}

if ((casillas[i].getAttribute("fila")=="cinco")){
    filasTablero[4].push(casillas[i]);
}
if ((casillas[i].getAttribute("fila")=="seis")){
    filasTablero[5].push(casillas[i]);
}
if ((casillas[i].getAttribute("fila")=="siete")){
    filasTablero[6].push(casillas[i]);
}
if ((casillas[i].getAttribute("fila")=="ocho")){
    filasTablero[7].push(casillas[i]);
}
}

for (n=0; n<filasTablero.length; n++){
    enfilar(filasTablero[n])
       }


function enfilar(fila){
    left=0;
    for (i=1; i<fila.length; i++){
       fila[i].style.marginTop=fila[0]+"px";
        fila[i].style.marginLeft=left+"px";
        left=left+tamañoPieza;
     }
}

}



// Los movimientos permiten la continuidad del desplazamiento y 
// tienen como valor los márgenes iniciales del div
//console.log(pieza);
var movimientoHorizontal=252;
var movimientoVertical=441;

function chars (evento){
    if (window.event)
    evento=window.
    caracteres(evento.keyCode);
}

console.log(chars);

function caracteres (chars) {

    var fichas=document.querySelectorAll(".ficha")
    console.log(fichas);
    var ficha= document.getElementById("pieza");
const piezas=[
"url(imagenes/peon.png)",
"url(imagenes/peon.png)", 
"url(imagenes/caballo.png)",
"url(imagenes/torre.png)",
"url(imagenes/dama.png)",
"url(imagenes/alfil.png)", 
"url(imagenes/rey.png)",
];   


// movilidad
    if(chars==39) {
        movimientoHorizontal+=9;
    movimiento(ficha);
    }
    if(chars==37) {
        movimientoHorizontal+=-9;
    movimiento(ficha);
    }
    if(chars==40) {
        movimientoVertical+=9;
    movimiento(ficha);
    }
    if(chars==38) {
        movimientoVertical+=-9;
    movimiento(ficha);
    }

    // Cambiar de un lado a otro
if (movimientoHorizontal==522){

    movimientoHorizontal=-72
    movimiento(ficha);
}
if (movimientoHorizontal==-81){

    movimientoHorizontal=513
    movimiento(ficha);
}
if (movimientoVertical==522){
    
    movimientoVertical=-54
    movimiento(ficha);
}
if (movimientoVertical==-81){

    movimientoVertical=513
    movimiento(ficha);
}
// TRANSFORMACIÓN 
if(
    (movimientoHorizontal==504)||(movimientoHorizontal==-63)||
    (movimientoVertical==504) 
)
{
    trasnformar(ficha); 
}

// REY ESCONDIDO
if(
    (movimientoVertical==-63)&&(movimientoHorizontal==252)
)
{
    ficha.style.backgroundImage ="url(imagenes/rey.png)";
    document.getElementById("campanita").play();
    ficha.setAttribute("rey", "true");
}

// Función de transformar pieza
function trasnformar(piece){
    var random=Math.abs(parseInt(Math.random()*movimientoVertical)%6);
   piece.removeAttribute("rey");
   if (piece.getAttribute("inmovil")!="true") {
    piece.style.backgroundImage = (piezas[random]);  
   }
}
// Función de movimiento
function movimiento(piece){
    if (piece.getAttribute("inmovil")!="true") {
    piece.style.marginLeft = movimientoHorizontal+"px";
    piece.style.marginTop = movimientoVertical+"px";
    }
}
// JUEGO GANADO
if(
    (movimientoVertical==441)&&(movimientoHorizontal==252)
    &&(pieza.getAttribute("rey")=="true")
)
{
    pieza.style.backgroundColor="green";
    pieza.setAttribute("inmovil", "true");
    document.getElementById("danubio").pause();
    document.getElementById("aplausos").play();

    mostrar(fichas);
  danzar()

}
function mostrar(elementos){
for(i=0; i<elementos.length; i++){
    elementos[i].style.visibility="visible";
}
}
function danzar(){
    fichas[0].classList.add("volar-1");
    fichas[1].classList.add("volar-2");
    fichas[2].classList.add("volar-3");
    fichas[3].classList.add("volar-4");
    fichas[4].classList.add("circulo");
    
}
// Necesito una función que me de valores aleatorios de 1 a 4 sin repetirse
// Permutaciones dentro de [0,1,2,3]
}


