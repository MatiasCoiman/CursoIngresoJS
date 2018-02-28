function Mostrar()//error.
{
	var edad;
	var sexo;
	var promedio;
	var edadMasBaja=101;
	var cantidadVarones=0;
	var respuesta="si";
	var contador=0;
	var iteraciones=100;
	var acumulador=0;

	while(contador<iteraciones)
	{	
		contador++;
		edad=prompt("ingrese una edad ")
		edad=parseInt(edad);
		sexo=prompt(" ingrese sexo.")
		acumulador=acumulador+edad;
		while(!(edad>0 && edad<=100))

		{
			edad=prompt("Error ,ingrese una edad valida")
			edad=parseInt(edad);
		}	
		while(!(sexo=="f" || sexo=="m"))

		{
			sexo=prompt("Error, ingrese sexo valido.")
		}
		if(edad==1)
		{
			edadMasBaja=edad;
		}
		else
		{
			if(edad<edadMasBaja)
			{
				edadMasBaja=edad;
			}
		}
		if(edad>=20 && sexo=="m")
			{
				cantidadVarones++;
			}



		
	}
	promedio=acumulador/contador;

alert("El promedio es: "+promedio );
alert("La edad mas baja es: "+edadMasBaja);
alert("La cantidad de varones mayores o iguales a 20 es: "+cantidadVarones);
}
