

function calculaPrecios (){
var strPrecioBase;
var dPrecioBase;
var strCategoria;
var strTipoIva;
var dTipoIva;
var dPvp;

strPrecioBase =  prompt ("Cual es el precio base.");
dPrecioBase =  parseFloat (strPrecioBase);
document.write ("PRECIO BASE: " + dPrecioBase );
document.write ("<BR>");

strCategoria =  prompt ("Cual es la categoría energética (A. B, C, o D");
switch (strCategoria) {
	case "A":
		dPrecioBase = dPrecioBase -200;
		break;
	case "B":
		dPrecioBase = dPrecioBase -100;
		break;
	case "C":
		dPrecioBase = dPrecioBase -50;
		break;
	case "D":
		dPrecioBase = dPrecioBase -25;
		break;
}
document.write ("PRECIO CON DESCUENTO ENERGETICO: " + dPrecioBase );
document.write ("<BR>");
strTipoIva =  prompt("Tipo de IVA a Aplicar %");
dTipoIva = parseFloat (strTipoIva);
dPvp =  dPrecioBase * (1+dTipoIva/100);

document.write ("PVP: " + dPvp);
document.write ("<BR>");

}
