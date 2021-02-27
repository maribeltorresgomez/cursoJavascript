

function crearTabla (){
var strFilas;
var strColumnas;
var i;
var j;

strFilas =  prompt("Cuantas filas quieres ?");
strColumnas =  prompt("Cuantas columnas quieres ?");
document.write ("<table border='2'>");
for (i=0;i< parseInt(strFilas);i++){
document.write ("<tr> ");
	for (j=0; j< parseInt(strColumnas); j++){
		document.write("<td>" + i +","+ j+ "</td>");
	}
	document.write ("</tr>");
}
document.write ("</table>");

}