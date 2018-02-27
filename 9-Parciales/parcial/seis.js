function Mostrar()
{
	var numero;
	var numerosPositivos;
	var respuesta="si";
	var cantidadPositivo=0;
	var cantidadNumeroPar=0;
	var numeroImpar=0;
	var promedioPositivo;
	var maximo=-1000;
	var minimo=1000;
	var acumuladorPositivo=0;
	var contador=00
	while(respuesta!="no")
	{
		contador++;
		numero=prompt("ingrese un numero entre -50 y 50");
		numero=parseInt(numero);
		
		

		respuesta=prompt("Ingrese no,para salir");

		while(numero<-50 || numero>50 || isNaN(numero))
		{
			numero=prompt("Error ingrese un numero valido");
		}
		if(numero%2==0)
		{
			cantidadNumeroPar++;
		}
		else
		{
			numeroImpar++;
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
		if(numero>0)
		{
			cantidadPositivo++;
			acumuladorPositivo=acumuladorPositivo+numero;
			promedioPositivo=acumuladorPositivo/cantidadPositivo;

		}		

	}

	

	document.write("<br>" +"Numeros pares "+cantidadNumeroPar);
	document.write("<br> " + "Numero impares "+numeroImpar);
	document.write("<br> "+ "Promedio positivo "+promedioPositivo);
	document.write("<br> "+ "Numero maximo "+maximo);
	document.write("<br> "+ "Numero minimo "+minimo);
}
