function Mostrar()
{
	var precioUno;
	var precioDos;
	var precioTres;
	var sumaPrecios;
	var promedio;
	

	precioUno=document.getElementById('precioUno').value;
	precioUno=parseInt(precioUno);
	precioDos=document.getElementById('precioDos').value;
	precioDos=parseInt(precioDos);
	precioTres=document.getElementById('precioTres').value;
	precioTres=parseInt(precioTres);

	sumaPrecios=precioUno+precioDos+precioTres;
	promedio=sumaPrecios/3;




	document.write("<br> "+" La suma de los precios es: "+sumaPrecios );
	document.write("<br> "+" El promedio es: "+promedio);
}
