window.onload= function(){
var tamañoTablero=500;
var tamañoPieza=tamañoTablero/8;
var casillas= document.querySelectorAll(".casilla");
var left=0;
var tablero=document.getElementById("tablero");
tablero.style.width=tamañoTablero;
tablero.style.height=tamañoTablero;


for (i=0; i<casillas.length; i++){
 casillas[i].style.width=tamañoPieza+"px";
 casillas[i].style.height=tamañoPieza+"px";
 casillas[i].addEventListener("click", mostrar)

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

function mostrar(){
    console.log(this.getBoundingClientRect())
    console.log(this);
}


}