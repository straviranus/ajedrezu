// Creación del tablero
function iniciar() {
    var Tablero=document.getElementById("tablero");
document.getElementById("boton").style.display="none";
document.getElementById("danubio").play();
setTimeout(aparecer,3000);
Tablero.classList.add("bajar")
Tablero.style.visibility="visible";
}

function aparecer(){
  
    for (i = 0; i <= 10; i++) {
    setTimeout("document.getElementById('pieza').style.opacity = " + (i / 10) + "", i * 300);
    setTimeout(teclas,3000);
    
        }
    }
    function teclas(){
        document.onkeydown=chars;
    }

window.onload= function tablero(){
    var Tablero=document.getElementById("tablero");
    console.log(Tablero.getBoundingClientRect());




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
   // fichas[4].classList.add("circulo");
   // fichas[5].classList.add("circulo-2");

    
}
// Necesito una función que me de valores aleatorios de 1 a 4 sin repetirse
// Permutaciones dentro de [0,1,2,3]
}


