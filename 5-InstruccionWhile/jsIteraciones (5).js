function Mostrar()
{
	var sexo;
	sexo = prompt("ingrese f ó m .");
	while(sexo!="f" && sexo!="m")
	{
		sexo = prompt("Error,ingrese f ó m .");
	}
		if(sexo=="f")
		{
			sexo="femenino";
		}
		else
		{
			sexo="masculino"
		}


		


document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN