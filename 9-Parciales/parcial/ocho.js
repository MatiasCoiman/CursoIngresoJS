//ingreso de alumnos, no sabemos cuantos alumnos hay, vamos a pedir el nombre , quiero saber cuantos alumnos ingrese
function Mostrar()
{
	var alumno;
	var cantidad=0;
	var respuesta;
	var nota;
	var promedio;
	var acumulador=0;
	var sexo;
	var sexoF=0;
	var sexoM=0;
	var desaprobados=0;
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
				sexo=prompt("ingrese f ó m .");
		while(!(sexo=="f" || sexo=="m"))
				{
					sexo = prompt("error,ingrese f ó m .");
				}	
				if(sexo=="f")
				{	
					sexoF++;
			
				}	
				if(sexo=="m")
				{	
				sexoM++;
		
				}
	
			acumulador=acumulador+nota;

			promedio=acumulador/cantidad;
			respuesta=prompt("¿quieres ingresar otro alumno?");

		if(sexo=="m" && nota<4)
			{
			desaprobados++;
			desprobados=parseInt(desaprobados);
			}	
		}

document.write("Se ingreso "+cantidad+" alumnos" + " y el promedio total es "+promedio);
document.write("<br>" + "Hay "+sexoF+ " personas femeninas "+ " y " +sexoM + " personas masculinas");
document.write("<br>" + "hay "+desaprobados+ " desaprobado");


}
