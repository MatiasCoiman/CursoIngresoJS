//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
//se ingresa hasta que el usuario quiera el nombre de un animal , el peso del mismo,validar que sea mayor a 0 y la temperatura del habitat de este animal, validar entre -40 y 40;
//informar la cantidad de temperaturas pares.
//la cantidad de temperaturas impares.
//el nombre del animal mas pesado.
//el nombre del animal menos pesado.
//la cantidad de animales que viven en habitat menores a 0 inclusive.
//el promedio del peso de todos los animales
//la temperatura maxima y la minima. 
//el nombre del peso maximo y el peso minimo;
function Mostrar()
{
	var nombreAnimal;
	var peso;
	var temperatura;
	var cantidadTemperaturaPar=0;
	var cantidadTemperaturaImpar=0;
	var animaslesMenor=0;
	var masPesado=0;
	var menosPesado=0;
	var canitdadAnimales;
	var promedioTotal;
	var tempMax=-40;
	var tempMin=40;
	var acumulador=0;
	var contadorPeso=0;
	var respuesta="si";
	var contadorTemperatura=0;
	var nombreMasPesado;
	var nombreMenosPesado;

	while(respuesta!="no")
	{
		contadorPeso++;
		nombreAnimal=prompt("Ingrese el nombre del animal.");
		peso=prompt("Ingrese el peso del animal.");
		peso=parseInt(peso);
		temperatura=prompt("Ingrese la temperatura del habitat.");
		temperatura=parseInt(temperatura);
		acumulador=acumulador+peso;
		
		while(peso<0 || isNaN(peso))
		{
			peso=prompt("Error,Ingrese el peso del animal valido.");
			peso=parseInt(peso);	
		}
		while(temperatura<-40 || temperatura>40 || isNaN(temperatura))
		{	
			
			temperatura=prompt("Error,Ingrese la temperatura del habitat valida.");
			temperatura=parseInt(temperatura);
		}
	if(temperatura==0)
	{
		
	}else
	{
		if(temperatura%2==0)
		{
			cantidadTemperaturaPar++;
		}
		else
		{
			cantidadTemperaturaImpar++;
		}

	}

	if(temperatura<=0)
	{
		animaslesMenor++;
	}
	if(contadorPeso==1)
	{
		tempMax=temperatura;
		tempMin=temperatura;
	}else
		{
			if(temperatura>tempMax)
			{
				tempMax=temperatura;
			}
			if(temperatura<tempMin)
			{
				tempMin=temperatura;
			}
		}	
	if(contadorPeso==1)
	{
		masPesado=peso;
		menosPesado=peso;
		nombreMasPesado=nombreAnimal;
		nombreMenosPesado=nombreAnimal;		
	}
	else
	{
		if(peso>masPesado)
		{
			masPesado=peso;
			nombreMasPesado=nombreAnimal;
		}
		if(peso<menosPesado)
		{
			menosPesado=peso;
			nombreMenosPesado=nombreAnimal;
		}
	}	




		respuesta=prompt("Ingrese no,para salir");
	}
	promedioTotal=acumulador/contadorPeso;
	document.write("<br>"+" La cantidad de temperatura par es : "+cantidadTemperaturaPar);
	document.write("<br>"+" La cantidad de temperatura Impar es : "+cantidadTemperaturaImpar);
	document.write("<br>"+" La cantidad de animales bajo cero son : "+animaslesMenor);
	document.write("<br>"+" El promedio total del peso es : "+promedioTotal);
	document.write("<br>"+" La temperatura maxima es : "+tempMax);
	document.write("<br>"+" La temperatura minima es : "+tempMin);
	document.write("<br>"+" El nombre del mas pesado es : "+nombreMasPesado);
	document.write("<br>"+" El nombre del menos pesado es : "+nombreMenosPesado);
}

