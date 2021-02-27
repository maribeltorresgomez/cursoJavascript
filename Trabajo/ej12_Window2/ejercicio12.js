function crearVentana(){


	var cadena = document.formPropiedades.txtTitulo.value;
	var ancho = document.formPropiedades.width.value;
	var altura = document.formPropiedades.height.value;
	var ventana =  window.open ("","","width="+ancho+",height="+altura+",resizable=false");	
	
	ventana.document.title = cadena;
	ventana.document.bgColor =  document.formPropiedades.color.value;
	
	//ventana.resizeTo (ancho, alto);
	


}

function cambiarVentana(){

var cadena =  document.formPropiedades.txtTitulo.value;
	window.document.title =  cadena;
	
	window.document.bgColor =  document.formPropiedades.color.value;
}