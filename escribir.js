var aleatorio=Math.round((Math.random()*100));
var numero=0;
var puntuacion=100;

var int=document.getElementById("intentos");
var punt=document.getElementById("puntuacion");


do{

punt.value=puntuacion;
	
numero=prompt("Introduce un numero entre 0 y 100: ");

if(numero>aleatorio){
int.value="Más Bajo";
}
else if(numero<aleatorio){
int.value="Más Alto";
}
puntuacion-=10;
}while(numero!=aleatorio && puntuacion>=0);