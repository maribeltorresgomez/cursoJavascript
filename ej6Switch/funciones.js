

function opciones (){
var cadena;

cadena =   prompt ("Dame un número de 1 a 3...");
switch (cadena){

	case "1":
		document.write ("Tecleaste un 1 .....");
		break;	
	case "2":
		document.write ("Tecleaste un 2 .....");
		break;	
	case "3":
		document.write ("Tecleaste un 3 .....");
		break;	
	default: 
		document.write ("Opción equivocada");
	}
}
