/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{  /*var numeroUno;
   var numeroDos;
	document.getElementById('numeroUno').value;   //el + sirve para concatenar y para sumar, si tiene comillas no se podra sumar, se necesita parseInt para poder sumar y tambien sirve para transformarlos en numeros enteros.
	document.getElementById('numeroDos').value;

 */	
 	var resultado;
 	var numeroUno;
 	var numeroDos;

 	numeroUno=document.getElementById('numeroUno').value;
 	numeroDos=document.getElementById('numeroDos').value;
 	
 	numeroUno=parseInt(numeroUno);
 	numeroDos=parseInt(numeroDos);


 	resultado=numeroUno+numeroDos;

 	alert("El suma es "+resultado);

}

