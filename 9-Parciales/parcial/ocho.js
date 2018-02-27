function Mostrar()
{
	var numero;
	var numeroPositivo=0;
	var cantidadNumeroPar=0;
	var promedio;
	var maximo=-9999;
	var minimo=9999;
	var acumulador=0;
	var respuesta="si";

	while(respuesta!="no")
	{
		numeroPositivo++;
		numero=prompt("ingrese un numero");
		numero=parseInt(numero);
		acumulador=acumulador+numero;

		while(numero<0)
		{
			numero=prompt("Error, ingrese un numero");
		}	

		respuesta=prompt("No, para salir");


		if(numero%2==0)
		{
			cantidadNumeroPar++;
		}
		if(numero==1)
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

	promedio=acumulador/numeroPositivo;			
	}


	document.write("<br> "+"cantidadNumeroPar: "+cantidadNumeroPar);
	document.write("<br> "+"Suma de numeros "+acumulador);
	document.write("<br> "+"Promedio: "+promedio);
	document.write("<br> "+"Maximo: "+maximo);
	document.write("<br> "+"Minimo: "+minimo);
}
