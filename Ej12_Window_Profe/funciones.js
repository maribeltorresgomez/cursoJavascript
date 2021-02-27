function crearVentana (){
    	
	var cadena = document.formPropiedades.txtTitulo.value;
	var ancho = document.formPropiedades.txtAnchura.value;
	var alto = document.formPropiedades.txtAltura.value;
	
	
	if (document.formPropiedades.chkRedimensionar.checked)
	{
	cadenaPropiedades = "resizable=yes,scrollbars=yes";    
    
	}
	else
	{
	   if (document.formPropiedades.chkScroll.checked){
	        cadenaPropiedades = "scrollbars=yes, resizable=no, width="+ ancho +",height="+alto;
	   }
	   else{
	       cadenaPropiedades =  "scrollbars=no, resizable=no,  width="+ ancho +",height="+alto;
	   }
	}
	if (document.formPropiedades.chkFullscreen.checked){
	    cadenaPropiedades = "channelmode=yes, fullscreen=yes";
	  
	}	

	    
	    var ventana =  window.open ('','',cadenaPropiedades);
		//ventana.location.assign('http://www.elpais.es');
	    ventana.document.bgColor =  document.formPropiedades.cmbColor.value;
	
	
	
	
	
}

function cambiame (){
	var cadena =  document.formPropiedades.txtTitulo.value;
	
	window.document.title =  cadena;
	window.document.bgColor =  document.formPropiedades.cmbColor.value;
}
