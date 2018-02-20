function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var promedio
	while(contador<5)
		{contador++;
			numero=prompt("Ingrese su Numero");
			numero=parseInt(numero);
			acumulador=acumulador+numero;
		}

promedio=acumulador/contador;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN

/*var contador=0;
var acumulador=0;
contador=contador+1;
acumulador=acumulador+variable;*/