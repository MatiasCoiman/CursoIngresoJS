//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var iva;
	var precioFinal;

	importe=prompt("Ingrese su importe.");
	importe=parseInt(importe);

	iva=(importe*21)/100;

	precioFinal=importe+iva;

	document.getElementById('importe').value=precioFinal;
	
}

