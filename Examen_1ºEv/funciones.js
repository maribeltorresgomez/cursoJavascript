function verCapa (ver, ocultar, ocultar2,ocultar3,ocultar4){ 		
       ver.style.visibility='visible';
       ocultar.style.visibility = 'hidden';
	   ocultar2.style.visibility = 'hidden';
	   ocultar3.style.visibility = 'hidden';
	   ocultar4.style.visibility = 'hidden';
}
			
function Profesor(){
	
	this.Nombre = "";
	this.Apellido1 = "";
	this.Apellido2 = "";
	this.Dni = "";
	this.Nprof = 0;
	
	this.Departamento = "";
	this.Titulacion = "";
	
}

function Departamento(dNombre, dNivel, profesores){
    this.Nombre = dNombre
	this.Nivel = dNivel;


}

function asignarnumero(){ //lo he hecho por si asignabamos nosotros el numero del profesor, al pedirnos un onkeypress al campo, este dato lo metemos manualmente

   document.getElementById('nprofesor').value= contador + 1002; //Empiezo a contar desde 1000 los expedientes

}


function validarDatos(){
    var nombre = document.getElementById("nombre");
	var apellido1 = document.getElementById("apellido1");
	var apellido2 = document.getElementById("apellido2");
	var dni = document.getElementById("dni");
	var nalumno = document.getElementById("nprofesor");

if(nombre.value == ""){
		nombre.style.borderColor="red";
	}
	else{
		nombre.style.borderColor="grey";
	}
	
if(apellido1.value == ""){
		apellido1.style.borderColor="red";
	}
	else{
		apellido1.style.borderColor="grey";
	}	
if(apellido2.value == ""){
		apellido2.style.borderColor="red";
	}
	else{
		apellido2.style.borderColor="grey";
	}
	
if(dni.value == ""){
		dni.style.borderColor="red";
	}
else{
		dni.style.borderColor="grey";
	}
	
	
if(nalumno.value == ""){
		nalumno.style.borderColor="red";
	}
else{
		nalumno.style.borderColor="grey";
	}	
	
if(nombre.value == "" || apellido1.value == "" || apellido2.value == "" || dni.value == "" || nalumno.value == ""){
		alert("Los campos en rojo no pueden estar vacios.");
		
	}
	
	

	

}

function validarDni(){
	var dni = document.getElementById("dni").value;
		
	expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
 
	if(expresion_regular_dni.test (dni) == true){
		numero = dni.substr(0,dni.length-1);
		let = dni.substr(dni.length-1,1);
		numero = numero % 23;
		//alert (numero);
		letra='TRWAGMYFPDXBNJZSQVHLCKET';
		letra=letra.substring(numero,numero+1);
		if (letra!=let) {
			alert('Dni erroneo, la letra del NIF no se corresponde');
			
		}
		else{
			alert('Dni correcto');
			document.getElementById("dni").style.borderColor="grey";
			validarDatos();
		}
	}
	else{
		alert('Dni erroneo, formato no valido');
	}

}



function solonumeros(evento){ //para verlo en todos los navegadores
    var letraASCII =  evento.charCode;//event variable global, que me permite acceder y obtener la información de ese evento. keyCode me dice el codigo acs de lo que se ha pulsado.
    
    if (letraASCII <48 || letraASCII > 57){
    return false;
    }
    else
    return true;
    
}

function grabarDepartamento(){


	contadorDep = contadorDep + 1;
    var objDep = new Departamento();
	objDep.Nombre=document.getElementById('nombreDep').value;
	objDep.Nivel=document.getElementById('cmbNivel').value;
	
	
	
	arrayDepartamentos.push(objDep);
	alert("Grabado");
	
	alert(arrayDepartamentos[0].Nombre);

}

function verDepartamentos(){
 var cadena = " ";
                       cadena = cadena + "<table border ='1'>";
    		
						for (var i =0; i< arrayDepartamentos.length; i++){ //tomo el array donde he almacenado todos los objetos departamento
						
						
    			        cadena = cadena +  "<tr>";
						cadena = cadena +"<td>";
						cadena = cadena + arrayDepartamentos[i].Nombre;
						cadena = cadena +"</td>";
						cadena = cadena +"<td>";
						cadena = cadena +"<input type='checkbox' name='departamentoProf' id='departamentoProf'>";
						cadena = cadena +"</td>";
						cadena = cadena +"</tr>";
						
    		            }
						cadena = cadena +"</table>";
						
						capa2.innerHTML = cadena;
						
					

}

function grabarProfesor(){

	contadorProf = contadorProf + 1;
    var objProf = new Profesor();
    alert(objProf);
	
	objProf.Nombre=document.getElementById('nombre').value;
	objProf.Apellido1=document.getElementById('apellido1').value;
	objProf.Apellido2=document.getElementById('apellido2').value;
	objProf.Dni=document.getElementById('dni').value;
	objProf.Nprof=document.getElementById('nprofesor').value;
	//objProf.Departamento=document.getElementById('departamentoProf').value;
	objProf.Titulacion=document.getElementById('cmbTitulacion').value;
	

	arrayProfesores.push(objProf);
	alert("Grabado");
	

}


function verDepartamentos(){


	var cadena = "";
    var cadena= cadena + 'Nombre:';


	cadena = cadena + '<table border="0" align="center">';
	    
	for (var i =0; i< arrayDepartamentos.length; i++){
	var ndepartamento= i +1;
	cadena = cadena + '<tr>';
	cadena = cadena + '<td>Departamento '+ndepartamento+' Nombre:'+arrayDepartamentos[i].Nombre +'</td>';
	cadena = cadena + '<td><button type="button" name="profesores'+i+'" id="profesores'+i+'" onclick="verProfesores('+i+');">Ver Profesores</button></td>';
	cadena = cadena + '<tr>';
	}	
	cadena = cadena + '</table>';	

	
	capa4.innerHTML = cadena;
	
			
}

function inicializa(){
    document.getElementById('nombre').value = "";
	document.getElementById('apellido1').value="";
    document.getElementById('apellido2').value="";
	document.getElementById('dni').value="";
	document.getElementById('nprofesor').value=0;

	
}

function verProfesores(){	
	var cadena = "";

	cadena = cadena + '<table border="0" align="center">';
	    
	for (var i =0; i< arrayProfesores.length; i++){

	
	cadena = cadena + '<tr>';
	cadena = cadena + '<td> Apellido1:'+arrayProfesores[i].Apellido1 +'</td>';
	cadena = cadena + '<td> Apellido2:'+arrayProfesores[i].Apellido2 +'</td>';
	cadena = cadena + '<td> Nombre:'+arrayProfesores[i].Nombre +'</td>';
	cadena = cadena + '<td><button type="button" name="profesor'+i+'" id="profesor'+i+'" onclick="infoProfesor('+i+');">Ver</button></td>';
	cadena = cadena + '<tr>';
	}	
	cadena = cadena + '</table>';	

	
	capa3.innerHTML = cadena;
			
}
/*
function infoProfesores(numero){	
alert("Nombre:"+arrayProfesores[numero].Nombre+ " Apellido1:"+arrayProfesores[numero].Apellido1+"..);
			
}
*/




















