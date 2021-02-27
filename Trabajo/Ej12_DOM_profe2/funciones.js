function crearVentana (){
    	
	var cadena = document.formPropiedades.txtTitulo.value;
	var ancho = document.formPropiedades.txtAnchura.value;
	var alto = document.formPropiedades.txtAltura.value;
	cadenaPropiedades =  "width="+ ancho +",height="+alto;
	
	
	alert (cadenaPropiedades);
	var ventana =  window.open ('http://www.elpais.es','',cadenaPropiedades);	
	
	
	ventana.document.title = cadena;
	ventana.document.bgColor =  document.formPropiedades.cmbColor.value;
	//ventana.resizeTo (ancho, alto);
	



}

function cambiame (){
	var cadena =  document.formPropiedades.txtTitulo.value;
	
	window.document.title =  cadena;
	window.document.bgColor =  document.formPropiedades.cmbColor.value;
}
