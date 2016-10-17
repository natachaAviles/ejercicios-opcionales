/*Elaborar una función a la cual le enviemos tres numersos enteros y muestre el menor */
function numeroMenor (a,b,c) {
	var num = Math.min(a,b,c);
	return num;
}
/*Escribir el código de una función a la que se le pasa como un parámetro un número entero y devuelve como resultado una cadena de texto que
indica si el número es par o impar*/
function numPar (num) {
	var num = prompt ("ingrese numero");
	if (num % 2 === 0) {
		alert ("El número es par");
	}else {
		alert ("El número es impar");
	}
}
/*Realizar una funcion a la cual le envie 3 numeros enteros 
y los muestre de menor a mayor*/
function mayorMenor (n1,n2,n3) {
	var newArray = [];

}
/*Definir una función que muestre información sobre na cadena de texto
que se le pasa como argumento,A partir de la cadena que se le pasa, la funcion
determina si esa cadena está formada sólo por mayúsculas,sólo por minusculas
o una mezcla de ambas*/
function MayMin (str) {
	var str = prompt ("ingrese palabra");
	if (str === str.toUpperCase()) {
		alert("Está formada solo por Mayusculas");
	}else if (str === str.toLowerCase()){
		alert("Está formada solo por Minusculas");	
	}else {
		alert ("Esta formada por Mayúsculas y Minúsculas");
	}
}
/*Realizar un programa que calcule el cuadrado de la suma de dos numeros*/
function cuadrado (a,b) {
	var suma = 0;
	total = (a + b); 
		
	return Math.pow(total,2);
}