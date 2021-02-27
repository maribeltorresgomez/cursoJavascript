

function clickPaginaPrompt (){
var cadena;
var numero;

cadena = prompt ("Dime tu edad", "");
//alert(cadena);

document.write (cadena);
document.write ("<BR>");
/*
cadena =  cadena + 5;
document.write ("Si le sumo 5 a tu edad es .....");
document.write (cadena);
document.write ("<BR>");
*/
numero =  parseInt (cadena);
document.write ("Si convierto a numero.... tu edad es ...");
document.write (numero);
document.write ("<BR>");

numero =  numero + 5;
document.write ("Si le sumo cinco.... tu edad es ...");
document.write (numero);
document.write ("<BR>");
alert(typeof (cadena));
alert (typeof (numero));

if (numero < 18) {
document.write ("Contenido bloqueado");
}else
document.write ("Bienvenido al contenido para adultos");


}