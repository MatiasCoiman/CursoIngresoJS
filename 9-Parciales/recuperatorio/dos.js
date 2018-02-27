function Mostrar()
{
  var importe;
  var precioFinal;
  var descuento;

  	importe=prompt("Ingrese el importe");
  	importe=parseInt(importe);

  	descuento=(importe*25)/100;
  	

  	precioFinal=importe-descuento;
  	document.getElementById('importeFinal').value=precioFinal;


}
