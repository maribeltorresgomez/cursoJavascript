function crearVentana (){
    	
	var cadena = document.formPropiedades.txtTitulo.value;
	var ancho = document.formPropiedades.txtAnchura.value;
	var alto = document.formPropiedades.txtAltura.value;
	var ventana =  window.open ();	
	
	
	ventana.document.title = cadena;
	ventana.document.bgColor =  document.formPropiedades.color.value;
	ventana.resizeTo (ancho, alto);
	



}

function cambiame (){
	var cadena =  document.formPropiedades.txtTitulo.value;
	
	window.document.title =  cadena;
	window.document.bgColor =  document.formPropiedades.color.value;
}
