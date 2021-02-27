function validar() {

	var stxtNombre;
	var stxtDNI;
	var stxtApellido1;
	var stxtapellido2;
	
	
	stxtNombre = document.formMatricula.txtNombre.value;
	stxtDNI = document.formMatricula.txtDNI.value;
	stxtApellido1 = document.formMatricula.txtApellido1.value;
	stxtApellido2 = document.formMatricula.txtApellido2.value;
	
	if (stxtNombre.length == 0 || stxtDNI.length == 0 || stxtApellido1 == 0) {
            alert ("No has metido nada en el CAMPO");
        }
        else alert ("Todo ok");
}

function indicaGrado(){


   if ( document.formMatricula.txtCiclo.value == "SMR" || document.formMatricula.txtCiclo.value == "GA" ){
             
        document.formMatricula.txtGrado.value = "Medio";
		
       }
	   else document.formMatricula.txtGrado.value = "Superior";
  
	//document.formMatricula.txtGrado.value = document.formMatricula.txtCiclo.value; 

}