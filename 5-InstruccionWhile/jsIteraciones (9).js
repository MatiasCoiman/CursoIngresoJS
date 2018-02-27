function Mostrar()
{

	var contador=0;
	// declarar variables
	
	var respuesta='si';
	var maximo=-9999;
	var minimo=9999;
	var numero;

	while(respuesta!='no')
	{
		contador++;
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		respuesta=prompt("No, para salir");

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
	
	}

	

	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;	




}//FIN DE LA FUNCIÓN