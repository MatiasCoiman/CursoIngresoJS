function Mostrar()
{
	//error.
	var numero;
	var promedio;
	var numeroPar=0;
	var acumulador=0;
	var numeroMax=-9999;
	var numeroMin=9999;
	var respuesta="si";
	var contador=00;

	while(respuesta!="no")
	{
		contador++;
		numero=prompt("Ingrese un numero.")
		numero=parseInt(numero);
		acumulador=acumulador+numero;
		while(numero<0)
		{
			numero=prompt("Error,Ingrese un numero valido.")
			numero=parseInt(numero);
		}

		if(numero%2==0)
		{
			numeroPar++;
		}

		if(numero==1)
		{
			numeroMax=numero;
			numeroMin=numero;
		}
		else
		{
			if(numero>numeroMax)
			{
				numeroMax=numero;
			}
			if(numero<numeroMin)
			{
				numeroMin=numero;
			}
		}







		respuesta=prompt("Ingrese no, para salir");
	}

promedio=acumulador/contador++;
document.write("<br> "+"La cantidad de numeros pares es : "+numeroPar);
document.write("<br> "+"La suma de todos los numeros es : "+acumulador);
document.write("<br> "+"El promedio de todos los numeros es : "+promedio);
document.write("<br> "+"El numero Maximo es : "+numeroMax);
document.write("<br> "+"El numero Minimo es : "+numeroMin);
}
