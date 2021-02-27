function verCapa (ver, ocultar, ocultar2){ 		
       ver.style.visibility='visible';
       ocultar.style.visibility = 'hidden';
	   ocultar2.style.visibility = 'hidden';
}
			
function Alumno(pNombre, pApellido1, pApellido2, pNExp, pFoto){
	
	this.Nombre = pNombre;
	this.Apellido1 = pApellido1;
	this.Apellido2 = pApellido2;
	this.NExp = pNExp;
	this.Foto = pFoto;
	this.Modulos = new Array();
	this.imprimeCarnet = verCarnet;
	this.agregarModulos = agregarModulos; 
	this.imprimeAlumno = imprimeAlumno;
	this.verdatos = verformularioAlumno;
	
}

function Modulo(pCiclo, pNombreModulo, pNumHoras, pCurso){
    this.Ciclo = pCiclo;
	this.NombreModulo = pNombreModulo;
	this.NumHoras = pNumHoras;
	this.Curso = pCurso;
}

function grabarAlumno(){

	contador = contador + 1;
    var objAlumno = new Alumno();
	objAlumno.Nombre=document.getElementById('nombre').value;
	objAlumno.Apellido1=document.getElementById('apellido1').value;
	objAlumno.Apellido2=document.getElementById('apellido2').value;
	objAlumno.NExp=document.getElementById('nexpediente').value;
	objAlumno.Foto=document.getElementById('foto').value;
	
	document.getElementById('verCarnet').disabled = false;
	//document.getElementById('veralumno').disabled = false;
	
	alumnos.push(objAlumno);

}

function verCarnet(){
	var ventana = window.open('','');
	
	ventana.document.write("<table border='2'");
	ventana.document.write("<tr>");
	ventana.document.write("<td><img src='" + alumnos[contador].Foto + "'></td>");
	ventana.document.write("<td> Nombre: " + alumnos[contador].Nombre + "</td>");
	ventana.document.write("</tr>");
	ventana.document.write("<tr>");
	ventana.document.write("<td> Apellido 1: " + alumnos[contador].Apellido1 + "</td>");
	ventana.document.write("</tr>");
	ventana.document.write("<tr>");
	ventana.document.write("<td> Apellido 2: " + alumnos[contador].Apellido2 + "</td>");
	ventana.document.write("</tr>");
	ventana.document.write("<tr>");
	ventana.document.write("<td> Numero Expediente: " + alumnos[contador].NExp + "</td>");
	ventana.document.write("</tr>");
	ventana.document.write("</table>");
	ventana.document.write ("<table border='0'>");
    ventana.document.write ("<tr><td>");
    ventana.document.write ("<button  type='button' name='cmdCerrar' id='cmdCerrar' onclick='window.close();'>Cerrar</button>");
    ventana.document.write ("</tr></td>");
    ventana.document.write ("</table>");
	
}

function informeModulo(numero){
alert("Ciclo:"+arrayModulos[numero].Ciclo+"   Nombre del Modulo:"+arrayModulos[numero].NombreModulo+"   Numero de horas:"+arrayModulos[numero].NumHoras+"   Curso:"+arrayModulos[numero].Curso);
}

function agregarModulos(modulo){
   //var numModMatriculados = 0;
   var encontrado = false;
  
   if(alumnos[contador].Modulos.length > 0){
  
		  for (var i = 0; i< alumnos[contador].Modulos.length; i++){
			 
				if(alumnos[contador].Modulos[i].NombreModulo == modulo.NombreModulo){
				encontrado = true;
				} 
			}
			
			if(encontrado == false){
			  //alert (modulo.NombreModulo);
			  //numModMatriculados = almacenModulos.push(modulo);
			  
			  alumnos[contador].Modulos.push(modulo);
			  alert("Grabado");
			  
			}else
			 alert("Ya te has matriculado en este modulo");	 
    }else{
		  //alert (modulo.NombreModulo);
		  //numModMatriculados = almacenModulos.push(modulo);
		  
		
		  alumnos[contador].Modulos.push(modulo);
		  alert("Grabado");
    }
		
			//alumno.Modulos = almacenModulos;
   
}

function listarModulos(){

var ventana = window.open('','Modulos DAW Laguna de Joatzel');

ventana.document.write ("<table  align='center' border='1'>");
ventana.document.write ("<tr>");
ventana.document.write ("<td>Ciclo</td>");
ventana.document.write ("<td>Nombre</td>");
ventana.document.write ("<td>Numero de Horas</td>");
ventana.document.write ("<td>Curso</td>");
ventana.document.write ("</tr>");

for (var i = 0; i< alumnos[contador].Modulos.length; i++){
    ventana.document.write("<tr>");
    ventana.document.write("<td>");
    ventana.document.write(alumnos[contador].Modulos[i].Ciclo);
    ventana.document.write("</td>");
    ventana.document.write("<td>");
    ventana.document.write(alumnos[contador].Modulos[i].NombreModulo);
    ventana.document.write("</td>");
	ventana.document.write("<td>");
    ventana.document.write(alumnos[contador].Modulos[i].NumHoras);
    ventana.document.write("</td>");
	ventana.document.write("<td>");
    ventana.document.write(alumnos[contador].Modulos[i].Curso);
    ventana.document.write("</td>");
    ventana.document.write("</tr>");
    }
    ventana.document.write ("</table>");
	
    ventana.document.write ("<br>");
    ventana.document.write ("<br>");
    ventana.document.write ("<br>");
    ventana.document.write ("<table border='0' align='center'>");
    ventana.document.write ("<tr><td>");
    ventana.document.write ("<button  type='button' name='cmdCerrar' id='cmdCerrar' onclick='window.close();'>Cerrar</button>");
    ventana.document.write ("</tr></td>");
    ventana.document.write ("</table>");
   
}

function imprimeAlumno(){

	var ventana = window.open('','Imprimir Alumno');

	ventana.document.write("Nombre:" + alumnos[contador].Nombre+ " ");
	ventana.document.write(alumnos[contador].Apellido1+ " ");
	ventana.document.write(alumnos[contador].Apellido2+ " ");
	ventana.document.write("NExp:" +alumnos[contador].NExp+ "<br>");

	for (var i = 0; i< alumnos[contador].Modulos.length; i++){
	ventana.document.write("Modulo "+i+":" +alumnos[contador].Modulos[i].NombreModulo +" ");
	ventana.document.write(alumnos[contador].Modulos[i].Ciclo +" ");
	ventana.document.write(alumnos[contador].Modulos[i].Curso +" ");
	ventana.document.write(alumnos[contador].Modulos[i].NumHoras +"<br>");
	}

    ventana.document.write ("<button  type='button' name='cmdCerrar' id='cmdCerrar' onclick='window.close();'>Cerrar</button>");
 }

function Matricular(){
alert("Matriculado");
	
	ponbotonAlumno();
    inicializa();
	
}	



function ponbotonAlumno(){	
	var cadena = "";
	cadena = cadena + '<table border="0" align="center">';
	    
	for (var i =0; i< alumnos.length; i++){
	var nalumno= i +1;
	cadena = cadena + '<tr>';
	cadena = cadena + '<td>Alumno '+nalumno+' Exp:'+alumnos[i].NExp +'</td>';
	cadena = cadena + '<td><button type="button" name="alumno'+i+'" id="alumno'+i+'" onclick="verformularioAlumno('+i+');">Ver</button></td>';
	cadena = cadena + '<tr>';
	}	
	cadena = cadena + '</table>'														
	barralateral.innerHTML = cadena;
	
			
}

function inicializa(){
    document.getElementById('nombre').value = "";
	document.getElementById('apellido1').value="";
    document.getElementById('apellido2').value="";
	document.getElementById('nexpediente').value=0;
	document.getElementById('foto').value="";
	
	document.getElementById('verCarnet').disabled = true;  
}

function verformularioAlumno(posicion){

	var cadena = ' ';
	
	cadena = cadena + '<form name="formAlumnos2">';
					
	    cadena = cadena + '<h4>DATOS DEL ALUMNO</h4>';
	    cadena = cadena + '<table border="0" align="center">'
	    cadena = cadena + '<tr>';
		cadena = cadena + '<td><label>Nombre:</label></td>';
		cadena = cadena + '<td><input type="text" name="nombre2" id="nombre2"></td>';
		cadena = cadena + '</tr>';
		cadena = cadena + '<tr>';
		cadena = cadena + '<td><label>Apellido 1:</label></td>';
		cadena = cadena + '<td><input type="text" name="apellido12" id="apellido12"></td>';
		cadena = cadena + '</tr>';
		cadena = cadena + '<tr>';
		cadena = cadena + '<td><label>Apellido 2:</label></td>';
		cadena = cadena + '<td><input type="text" name="apellido22" id="apellido22"></td>';
		cadena = cadena + '</tr>';
		cadena = cadena + '<tr>';
		cadena = cadena + '<td><label>Expediente:</label></td>';
		cadena = cadena + '<td><input type="text" name="nexpediente2" id="nexpediente2"></td>';
		cadena = cadena + '</tr>';
		cadena = cadena + '</table>';
	    cadena = cadena + '</form>';			       	
	
	cadena = cadena + '<b>MODULOS:</b>';

	cadena = cadena + '<table border="0" align="center">';
                     	for (var i =0; i< alumnos[posicion].Modulos.length; i++){
						var nmodulo= i +1;
						cadena = cadena + '<tr>';
						cadena = cadena + '<td>'+nmodulo+'</td>';
						cadena = cadena + '<td>'+alumnos[posicion].Modulos[i].NombreModulo+'</td>';
						cadena = cadena + '<td>'+alumnos[posicion].Modulos[i].Ciclo+'</td>';
						cadena = cadena +'</tr>';
						}
						cadena = cadena +'</table>';					
						capa3.innerHTML = cadena;
	

	document.getElementById('nombre2').value= alumnos[posicion].Nombre;
	document.getElementById('apellido12').value= alumnos[posicion].Apellido1;
	document.getElementById('apellido22').value= alumnos[posicion].Apellido2;
	document.getElementById('nexpediente2').value= alumnos[posicion].NExp;
	document.getElementById('foto2').value= alumnos[posicion].Foto;

   
}



















