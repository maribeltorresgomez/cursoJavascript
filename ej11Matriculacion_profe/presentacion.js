function validarDatos (){
	var strNombre =""; 
	var strApellido1 = "";
	var strApellido2 ="";
	var strDni= "";
	
	strNombre =  document.formMatricula.txtNombre.value;
	strApellido1 =  document.formMatricula.txtApellido1.value;
	strApellido2 =  document.formMatricula.txtApellido2.value;
	strDni =  document.formMatricula.txtDni.value;
	
	if (strNombre.length == 0 || strApellido1.length ==0 || strDni.length==0){
	  alert ("Ausencia de datos obligatorios ....")
	  return;
	}
	alert ("TODO OK");
}


function selCiclo () {
	
	/*if (document.formMatricula.cmbCiclo.value == "SMR" || 
	    document.formMatricula.cmbCiclo.value == "GA"  )
	document.formMatricula.txtGrado.value = "MEDIO"
	else
	document.formMatricula.txtGrado.value = "SUPERIOR"*/
	
	document.formMatricula.txtGrado.value =  document.formMatricula.cmbCiclo.value;
	
}



























