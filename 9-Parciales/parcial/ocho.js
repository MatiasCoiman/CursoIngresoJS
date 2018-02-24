//ingreso de alumnos, no sabemos cuantos alumnos hay, vamos a pedir el nombre , quiero saber cuantos alumnos ingrese
function Mostrar()
{
	var alumno;
	var cantidad=0;
	var respuesta;
	var nota;
	var promedio;
	var acumulador=0;
	while(respuesta!="no")
		{
			alumno=prompt("ingrese nombre de alumno");
			cantidad=cantidad+1;
			nota=prompt("ingrese la nota");
			nota=parseInt(nota);
			while(nota<0 || nota>10)
				{
					nota=prompt("ingrese la nota");
					nota=parseInt(nota);	
				}	

				acumulador=acumulador+nota;

			promedio=acumulador/cantidad;
			respuesta=prompt("¿quieres ingresar otro alumno?");
		}
document.write("Se ingreso "+cantidad+" alumnos" + " y el promedio total es "+promedio);



}
