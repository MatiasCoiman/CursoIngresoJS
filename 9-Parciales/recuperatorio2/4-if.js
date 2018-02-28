//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;
	numeroUno=prompt("Ingrese un numero.");
	numeroUno=parseInt(numeroUno);
	numeroDos=prompt("Ingrese otro numero.");
	numeroDos=parseInt(numeroDos);

	if(numeroUno==numeroDos)
	{
		resultado=numeroUno*numeroDos;
		document.write("El resultado es: "+resultado);
	}
	if(numeroUno>numeroDos)
	{
		resultado=numeroUno-numeroDos;
		document.write("El resultado es: "+resultado);
	}
	if(numeroUno<numeroDos)
	{
		resultado=numeroUno+numeroDos;
		document.write("El resultado es: "+resultado);
	}
}

