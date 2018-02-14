function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroAleatorio;
	numeroAleatorio=Math.floor((Math.random() * 10) + 1);
/*
	if(numeroAleatorio==9 || numeroAleatorio==10)
	 	{ alert(numeroAleatorio+" EXCLENTE");
	 	}
	if(numeroAleatorio>=4 && numeroAleatorio<=8)
	 	{ alert(numeroAleatorio+" APROBO");
	 	}
	if(numeroAleatorio<4)
	 	{ alert(numeroAleatorio+" Vamos ,la proxima se puede");
	 	}
*/
	if(numeroAleatorio>8)
	{
		alert("excelente");
	}
	else
		{	if(numeroAleatorio>3&&numeroAleatorio<9)
				{ alert("aprobo");
			else
			{
				alert("desaprobo");
			}
	}
		
	



}//FIN DE LA FUNCIÓN