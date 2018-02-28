//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
//no usar while , no validar solo (if)
//se ingresan 2 numeros si son iguales se concatenan , si el mayor es el primero se multiplican, de lo contrario se restan.
//si el resultado par mostrar.
function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var resta;
	var concatenacion;
	var multiplicacion;
	var resultado;

	numeroUno=prompt("ingrese un numero.");
	numeroDos=prompt("ingrese un numero.");

	if(numeroUno==numeroDos)
	{
		concatenacion=numeroUno+numeroDos;
		resultado=concatenacion;
	}
	else
	{	numeroUno=parseInt(numeroUno);
		numeroDos=parseInt(numeroDos);
		if(numeroUno>numeroDos)
		{
			
			resultado=numeroUno*numeroDos;
			
		}
		else
		{
		resta=numeroUno-numeroDos;
		resultado=resta;
		}
	}

	

	
	
	alert("El resultado es :"+resultado);	

	
}

