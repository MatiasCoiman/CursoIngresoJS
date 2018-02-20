function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

	while(respuesta=="si")
		{
			contador++;
			numero=prompt("Ingrese su Numero");
			numero=parseInt(numero);
			acumulador=acumulador+numero;

			respuesta=prompt("ingrese si para continuar");
		}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN