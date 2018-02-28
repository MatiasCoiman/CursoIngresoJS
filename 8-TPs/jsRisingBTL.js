/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	var sexo;
 	var edad;
 	var sueldoBruto;
 	var estadoCivil;
 	var numeroLegajo;
 	var masculino;
 	var femenino;

 	

 	
		edad=prompt("Ingrese edad.");
 		edad=parseInt(edad);
 		


 	while(!(edad>=18 && edad<=90 || isNaN(edad)))
 	{	
 		edad=prompt("Error,Ingrese edad valida.");
 		edad=parseInt(edad);
 		
 	}
 	sexo=prompt("Ingrese sexo.");
 	while(sexo!="f" && sexo!="m")
 	{
 		sexo=prompt("Error,Ingrese sexo valido.");
 	}
 		switch(sexo)
 		{
 			case "f":
 				sexo="femenino";
 				break
 			case "m":
 				sexo="masculino";
 				break;
 		}

 		estadoCivil=prompt("Ingrese estado civil, 1-soltero,2-casado,3-divorciados,4-viudo/a");

 		switch(estadoCivil)
 		{
 			case "1":
 				estadoCivil="Soltero";
 				break;
 			case "2":
 				estadoCivil="Casado";
 				break;
 			case "3":
 				estadoCivil="divorciado/a";
 				break;
 			case "4":
 				estadoCivil="Viudo/a";
 				break;

 		}
 		sueldoBruto=prompt("Ingrese sueldo bruto no menor a 8000");
 		sueldoBruto=parseInt(sueldoBruto);
 		while(sueldoBruto<8000)
 		{	
 			sueldoBruto=prompt("Error,ingrese sueldo bruto valido");
 			sueldoBruto=parseInt(sueldoBruto);
 		}
 		


	

 	document.getElementById('Edad').value=edad;
 	document.getElementById('Sexo').value=sexo;
 	document.getElementById('EstadoCivil').value=estadoCivil;
 	document.getElementsByTagName("Sueldo").value=sueldoBruto;

}
