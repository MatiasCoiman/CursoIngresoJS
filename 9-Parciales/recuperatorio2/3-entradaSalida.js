//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ancho;
	var largo;
	var perimetro;
	var hilos;

	ancho=document.getElementById('ancho').value;
	ancho=parseInt(ancho);
	largo=prompt("Ingrese cuantos metros de largo .");
	document.getElementById('largo').value=largo;
	largo=parseInt(largo);

	perimetro=ancho*2+largo*2;
	
	hilos=perimetro*6;

	alert("Se necesitan "+hilos+ " m de hilos");
}

