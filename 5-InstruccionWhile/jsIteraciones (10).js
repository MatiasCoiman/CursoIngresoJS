function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var negativo=0;
	var sumaNegativo=0;
	var sumaPositivo=0;
	var cantidadPositivo=0;
	var cantidadNegativo=0;
	var cantidadCero=0;
	var cantidadNumeroPar=0;
	var promedioPositivo=0;
	var promedioNegativo=0;
	var resultadoResta;
	var numero;
	var positivo=0;
	var negativo=0;
	var respuesta="si";

	while(respuesta!="no")
	{
		contador++;
		numero=prompt("ingrese un numero");
		numero=parseInt(numero);

		if(numero<0)//suma de negativo y positivos.
		{
			sumaNegativo=sumaNegativo+numero;
		}
		else
		{
			sumaPositivo=sumaPositivo+numero;
		}

		respuesta=prompt("No, para salir");

		if(numero==0)//cantidad de ceros, positivos y negativos.
		{
			cantidadCero++;
		}
			else
			{
				if(numero<0)
				{
					cantidadNegativo++;
					negativo=negativo+numero;
				}
				else
				{	
					cantidadPositivo++;
					positivo=positivo+numero;
				}			
			}
	//CANTIDAD NUMEROS PARES
          if (numero%2==0)
           {
               cantidadNumeroPar++;
           }
     //promedio de positivo y negativos y resultado resta.     		
       promedioPositivo=positivo/cantidadPositivo;
       promedioNegativo=negativo/cantidadNegativo;

       resultadoResta=positivo+negativo;
	}


document.write("<br> "+"suma de negativo es "+sumaNegativo);
document.write("<br> "+"suma de positivo es "+sumaPositivo);
document.write("<br> "+ "cantidad de ceros "+cantidadCero);
document.write("<br> "+ "cantidad de positivo "+cantidadPositivo);
document.write("<br> "+ "cantidad de negativo "+cantidadNegativo);
document.write("<br> "+ "cantidad de Pares "+cantidadNumeroPar);
document.write("<br> "+ "Promedio positivo "+promedioPositivo);
document.write("<br> "+ "Promedio negativo "+promedioNegativo);
document.write("<br> "+ "Diferencia de positivo y negativo "+resultadoResta);
}//FIN DE LA FUNCIÓN