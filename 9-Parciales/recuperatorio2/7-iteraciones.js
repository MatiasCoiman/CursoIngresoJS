//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var notas;
	var sexo;
	var respuesta="si";
	var promedioTotal;
	var notaBaja=999;
	var notaVarones=0;
	var iteraciones=3;
	var contador=0;
	var acumulador=0;

	while(contador<iteraciones)
	{	
		contador++;
		notas=prompt("Ingrese nota.")
		notas=parseInt(notas)
		sexo=prompt("Ingrese sexo.")
		acumulador=acumulador+notas;


		while(notas<0 || notas>10 || isNaN(notas))
		{
			notas=prompt("Error,Ingrese nota valida.");
			notas=parseInt(notas);
		}

		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("Error,Ingrese sexo.");
		}

		if(contador==1)
		{
			notaBaja=notas;
		}
		else
		{
			if(notas<notaBaja)
			{
				notaBaja=notas;
			}


		}

		if(notas>=6 && sexo=="m")
		{
			notaVarones++;
		}



		
	}
	promedioTotal=acumulador/contador;

	document.write("<br> "+" El promedio de las notas totales es: "+promedioTotal);
	document.write("<br> "+" La nota mas baja es : "+notaBaja);
	document.write("<br> "+" La Cantidad de varones que obtuvieron el 6 o igual : "+notaVarones);
}

