// Creación del tablero
window.onload= function tablero(){
document.onkeydown=chars;
var tamañoTablero=520;
var tamañoPieza=tamañoTablero/8;
var casillas= document.querySelectorAll(".casilla");
var left=0;
var tablero=document.getElementById("tablero");
tablero.style.width=tamañoTablero;
tablero.style.height=tamañoTablero;


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
    casillas[i].addEventListener("click", coordenadas)
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
function coordenadas(){
    console.log(this.getBoundingClientRect());
}


}

// Los movimientos permiten la continuidad del desplazamiento y 
// tienen como valor los márgenes iniciales del div
//console.log(pieza);
var movimientoHorizontal=260;
var movimientoVertical=455;

function chars (evento){
    if (window.event)
    evento=window.
    caracteres(evento.keyCode);
}



function caracteres (chars) {
    var ficha= document.getElementById("pieza");
const piezas=[
"url(https://raw.githubusercontent.com/straviranus/imagenes-chess/master/peon.png)",
"url(https://raw.githubusercontent.com/straviranus/imagenes-chess/master/peon.png)", 
"url(https://raw.githubusercontent.com/straviranus/imagenes-chess/master/caballo.png)",
"url(https://raw.githubusercontent.com/straviranus/imagenes-chess/master/torre.png)",
"url(https://raw.githubusercontent.com/straviranus/imagenes-chess/master/dama.png)",
"url(https://raw.githubusercontent.com/straviranus/imagenes-chess/master/alfil.png)", 
"url(https://raw.githubusercontent.com/straviranus/imagenes-chess/master/rey.png)",
];   


// movilidad
    if(chars==39) {
        movimientoHorizontal+=10;
        ficha.style.marginLeft = movimientoHorizontal+"px";
    }
    if(chars==37) {
        movimientoHorizontal+=-10;
        document.getElementById("pieza").style.marginLeft = movimientoHorizontal+"px";
    }
    if(chars==40) {
        movimientoVertical+=10;
        document.getElementById("pieza").style.marginTop = movimientoVertical+"px";
    }
    if(chars==38) {
        movimientoVertical+=-10;
        document.getElementById("pieza").style.marginTop = movimientoVertical+"px";
    }


if (movimientoHorizontal==-80) {
    movimientoHorizontal=490;
    var randomH= Math.abs(parseInt(Math.random()*movimientoHorizontal)%6); 
    document.getElementById("pieza").style.backgroundImage = (piezas[randomH])    
   
}

if (movimientoHorizontal==500) {
    movimientoHorizontal=-70;
    var randomH= Math.abs(parseInt(Math.random()*movimientoHorizontal)%6);
    document.getElementById("pieza").style.backgroundImage = (piezas[randomH]);  
    
}

if (movimientoVertical>500) {
    movimientoVertical=-50;
    var randomV= Math.abs(parseInt(Math.random()*movimientoVertical)%6);
    document.getElementById("pieza").style.backgroundImage = (piezas[randomV]);

}

if (movimientoVertical<-70) {
    movimientoVertical=500;
    var randomV= Math.abs(parseInt(Math.random()*movimientoVertical)%6);
    document.getElementById("pieza").style.backgroundImage = (piezas[randomV]);  

}
console.log(movimientoVertical,movimientoHorizontal);
}
