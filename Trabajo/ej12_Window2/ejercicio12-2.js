function crearVentana(){


	var cadena = document.formPropiedades.txtTitulo.value;
	var ancho = document.formPropiedades.width.value;
	var altura = document.formPropiedades.height.value;
	var color=document.formPropiedades.color.value;
	
	var cadenaPropiedades="width="+ancho+",height="+altura+",resizable=false";
	
	alert(cadenaPropiedades);
	
	var ventana =  window.open ("","",cadenaPropiedades);
	var ventana =  window.open ("http","",cadenaPropiedades);	
	
	ventana.document.title = cadena;
	ventana.document.bgColor =  document.formPropiedades.color.value;
	
	//ventana.resizeTo (ancho, alto);
	


}

function cambiarVentana(){

var cadena =  document.formPropiedades.txtTitulo.value;
	window.document.title =  cadena;
	
	window.document.bgColor =  document.formPropiedades.color.value;
}