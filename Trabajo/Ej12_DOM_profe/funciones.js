function crearVentana (){
    	
	var cadena = document.formPropiedades.txtTitulo.value;
	var ventana =  window.open ();	
	
	ventana.document.title = cadena;
	ventana.document.bgColor =  document.formPropiedades.cmbColor.value;
	



}

function cambiame (){
	var cadena =  document.formPropiedades.txtTitulo.value;
	
	window.document.title =  cadena;
}
