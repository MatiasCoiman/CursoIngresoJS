//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero=0;
	var cantidadPares=0;
	var promedioTotal;
	var acumulador=0;
	var maximo=-999;
	var minimo=999;
	var respuesta="si";
	var contador=0;


	while(respuesta!="no")
	{	
		contador++;
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);
		acumulador=acumulador+numero;

		while(numero<0)
		{
			numero=prompt("Error,Ingrese un numero");
			numero=parseInt(numero);
		}
		if(numero%2==0)
		{
			cantidadPares++;
		}


		if(contador==1)
		{
			maximo=numero;
			minimo=numero;
		}
		else
		{
			if(numero>maximo)
			{
				maximo=numero;
			}
			if(numero<minimo)
			{
				minimo=numero;
			}
		}	


		respuesta=prompt("No,para salir.");
	}
	
	promedioTotal=acumulador/contador;


	document.write("<br> "+"La cantidad de numeros pares es : "+cantidadPares);
	document.write("<br> "+"La suma de todos los numeros es : "+acumulador);
	document.write("<br> "+"El promedio total es : "+promedioTotal);
	document.write("<br> "+" El maximo numero fue de : "+maximo);
	document.write("<br> "+" El minmo numero fue de : "+minimo);
	
}	

