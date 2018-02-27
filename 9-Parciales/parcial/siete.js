function Mostrar()
{
	var letra;
	var numero;
	var minimo=999;
	var maximo=-9999;
	var promedio;
	var respuesta="si";
	var contador=0;
	var letraMax;
	var letraMin;
	var numeroVocal=0;
	var acumuladorVocal=0;

	while(respuesta!="no")
	{
		contador++;
		letra=prompt("Ingrese una Letra");
		while(!(isNaN(letra)))
		{
			letra=prompt("Error , ingrese una letra");

		}
		
		numero=prompt("Ingrese un numero entre -200 y 200");
		numero=parseInt(numero);
		while(numero<-200 || numero>200)
		{
			numero=prompt("Error ingrese un numero valido");
			numero=parseInt(numero);
		}
	
		
		
		if(numero==1)
		{
			maximo=numero;
			letraMax=letra;
			minimo=numero;
			letraMin=letra;
		}
		else
		{
			if(numero>maximo)
			{
				maximo=numero;
				letraMax=letra;
			}
			if(numero<minimo)
			{
				minimo=numero;
				letraMin=letra;
			}
		
			
		}

		switch(letra)
			{
				case"a":
				case"e":
				case"i":
				case"o":
				case"u":
					numeroVocal++;
					acumuladorVocal=acumuladorVocal+numero;
					break;
				
					
			}		
		respuesta=prompt("Ingrese no,para salir");	
	}
	promedio=acumuladorVocal/numeroVocal;

	document.write("<br> "+"La letra del numero Minimo es :"+letraMin);
	document.write("<br> "+"La letra del numero Maximo es :"+letraMax);
	document.write("<br> "+ "El promedio de los numeros despues de una vocal es :"+promedio);
}
