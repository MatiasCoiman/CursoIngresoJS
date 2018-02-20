function Mostrar()
{

var sexo = prompt("ingrese f ó m .");
	while(!(sexo=="f" || sexo=="m"))
		{
			sexo = prompt("error,ingrese f ó m .");
		}	

//document.getElementById('Sexo').value=sexo;
	if(sexo=="f")
		{
			document.getElementById('Sexo').value="Femenino";
		}	
	else
		document.getElementById('Sexo').value="Masculino";
			
}//FIN DE LA FUNCIÓN