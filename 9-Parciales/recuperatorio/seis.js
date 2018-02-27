function Mostrar()
{
	var peso=0;
	var iteraciones=50;
	var respuesta="si";
	var minimoPeso=999;
	var maximoPeso=-999;
	var contador=0;

	while(contador<iteraciones)
	{
		contador++;
		peso=prompt("Ingrese el peso");
		peso=parseInt(peso);
		while(peso<0 || isNaN(peso))
		{
			peso=prompt("Error, ingrese un numero valido");
			peso=parseInt(peso);
		}
		if(peso==1)
		{
			maximoPeso=peso;
			minimoPeso=peso;
		}
		else
		{
			if(peso>maximoPeso)
			{
				maximoPeso=peso;
			}
			if(peso<minimoPeso)
			{
				minimoPeso=peso;
			}
		}
	}
	document.write("<br>"+" El mas pesado fue :"+maximoPeso);
	document.write("<br>"+" El menos pesado fue "+minimoPeso);
}
