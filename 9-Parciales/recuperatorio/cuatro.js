function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;
	var promedio;
	var numeroPositivo;
	var numeroNegativo;


	numeroUno=prompt("Ingrese un numero");
	numeroUno=parseInt(numeroUno);
	numeroDos=prompt("Ingrese un numero");
	numeroDos=parseInt(numeroDos);

	resultado=numeroUno+numeroDos;

	if(resultado>0)
	{
		document.write("Es Positivo.");
	}
	if(resultado<0)
	{
		document.write("Es negativo.");
	}
	if(resultado==0)
	{
		document.write("Es cero.");
	}
	
}	
