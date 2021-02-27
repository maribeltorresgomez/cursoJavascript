function validarVacios(){
	var nombre, dni, apellido, fecha;
	var curso, modulos, matricula, precio;
	var beca, tipobeca;
	
	nombre = document.getElementById("nombre");
	dni = document.getElementById("dni");
	apellido = document.getElementById("apellido1");
	fecha = document.getElementById("fecha");
	
	curso = document.getElementById("curso").value;
	modulos = document.getElementById("modulos").value;
	matricula = document.getElementById("matricula");
	
	if(nombre.value == ""){
		nombre.style.borderColor="red";
	}
	else{
		nombre.style.borderColor="black";
	}
	
	if(dni.value == ""){
		dni.style.borderColor="red";
	}
	else{
		dni.style.borderColor="black";
	}
	
	if(apellido.value == ""){
		apellido.style.borderColor="red";
	}
	else{
		apellido.style.borderColor="black";
	}
	
	if(fecha.value == ""){
		fecha.style.borderColor="red";
	}
	else{
		fecha.style.borderColor="black";
	}
	
	if(nombre.value == "" || dni.value == "" || apellido.value == "" || fecha.value == ""){
		alert("Los campos en rojo no pueden estar vacios.");
		matricula.value = "";
	}
	else{
		if(modulos > 7){
			alert("No puedes tener mas de 7 modulos pendientes.");
		}
		
		precio = modulos*120;

		matricula.value = precio;
	}
}

function validarCiclo(){
	var ciclo, varciclo, grado;
	
	ciclo = document.getElementById("ciclo");
	varciclo = ciclo.options[ciclo.selectedIndex].value;
	grado = document.getElementById("grado");

	switch(varciclo){
		case "smr":
			grado.selectedIndex = 1;
			break;
		case "ga":
			grado.selectedIndex = 1;
			break;
		default:
			grado.selectedIndex = 0;
			break;
	}
}

function validarCurso(){
	var curso, modulos;
	
	curso = document.getElementById("curso").value;
	modulos = document.getElementById("modulos");
	
	if(curso > 2){
		alert("El curso solo puede ser 1 o 2.");
	}
		
	if(curso == 2){	
		modulos.disabled = false;
	}
}

function validarDNI(dni) {
	var numero, let, letra, expresion_regular_dni;
	var txtdni = document.getElementById("dni");;
 
	expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
 
	if(expresion_regular_dni.test (dni) == true){
		numero = dni.substr(0,dni.length-1);
		let = dni.substr(dni.length-1,1);
		numero = numero % 23;
		letra='TRWAGMYFPDXBNJZSQVHLCKET';
		letra=letra.substring(numero,numero+1);
		if (letra!=let) {
			alert('Dni erroneo, la letra del NIF no se corresponde');
		}
		else{
			alert('Dni correcto');
			txtdni.style.borderColor="black";
		}
	}
	else{
		alert('Dni erroneo, formato no válido');
		txtdni.style.borderColor="red";
	}
}

function validarBeca(){
	var beca, tipobeca, importebeca;
	
	beca = document.getElementById("beca");
	tipobeca = document.getElementById("tipobeca");
	importebeca = document.getElementById("importebeca");
	
	if(beca.checked == true){
		tipobeca.disabled = false;
	}
	else{
		tipobeca.disabled = true;
		importebeca.value = "";
	}
}

function importeBeca(){
	var selectbeca, selecttipobeca, importebeca;
	
	selectbeca = document.getElementById("tipobeca");
	
	selecttipobeca = selectbeca.options[selectbeca.selectedIndex].value;
	
	importebeca = document.getElementById("importebeca");
	
	importebeca.value = selecttipobeca;
}