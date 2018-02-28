//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe=0;
	var iteraciones=7;
	var contador=0;
	var minimo=999;
	var maximo=-999;

	while(contador<7)
	{
		contador++;
		importe=prompt("Ingrese el importe");
		importe=parseInt(importe);

		while(importe<0 || isNaN(importe))
		{
			importe=prompt("Error,Ingrese el importe valido");
			importe=parseInt(importe);
		}

		if(contador==1)
		{
			maximo=importe;
			minimo=importe;
		}
		else
		{
			if(importe>maximo)
			{
				maximo=importe;
			}
			if(importe<minimo)
			{
				minimo=importe;
			}
		}
		

	}
	document.write("<br> "+" El mayor importe fue de : "+maximo);
	document.write("<br> "+" El menor importe fue de : "+minimo);
	
}

