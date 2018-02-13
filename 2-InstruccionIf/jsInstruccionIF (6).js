function Mostrar()
{
//tomo la edad  
	var edad;

	edad=document.getElementById('edad').value;

	if(edad>=18)
		{alert("Mayor de edad")}

	if(edad<18&&edad>=13)
		{alert("Adolescentes")}
	
	if(edad<13)
		{alert("Niños")}







}//FIN DE LA FUNCIÓN