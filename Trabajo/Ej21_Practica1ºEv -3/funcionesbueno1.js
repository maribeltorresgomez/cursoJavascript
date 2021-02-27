function verCapa (ver, ocultar, ver2){ 		
       ver.style.visibility='visible';
       ocultar.style.visibility = 'hidden';
	   ver2.style.visibility='visible';
}
			
function Alumno(pNombre, pApellido1, pApellido2, pNExp, pFoto){
	
	this.Nombre = pNombre;
	this.Apellido1 = pApellido1;
	this.Apellido2 = pApellido2;
	this.NExp = pNExp;
	this.Foto = pFoto;
	this.Modulos = new Array();
	this.imprimeCarnet = verCarnet;
	
}

function Modulo(pCiclo, pNombreModulo, pNumHoras, pCurso){
    this.Ciclo = pCiclo;
	this.NombreModulo = pNombreModulo;
	this.NumHoras = pNumHoras;
	this.Curso = pCurso;
}

function Matricula(objAlumno){
	this.alumno = objAlumno;
	this.agregarModulos = agregarModulos; 
	this.imprimeAlumno = imprimeAlumno;
	this.verdatos = verformularioAlumno;
}

function grabarAlumno(contador){

    
	objAlumno.Nombre=document.getElementById('nombre').value;
	objAlumno.Apellido1=document.getElementById('apellido1').value;
	objAlumno.Apellido2=document.getElementById('apellido2').value;
	objAlumno.NExp=document.getElementById('nexpediente').value;
	objAlumno.Foto=document.getElementById('foto').value;
	
	document.getElementById('verCarnet').disabled = false;
	document.getElementById('veralumno').disabled = false;

}



function verCarnet(){
	var ventana = window.open('','');
	
	ventana.document.write("<table border='2'");
	ventana.document.write("<tr>");
	ventana.document.write("<td><img src='" + objAlumno.Foto + "'></td>");
	ventana.document.write("<td> Nombre: " + objAlumno.Nombre + "</td>");
	ventana.document.write("</tr>");
	ventana.document.write("<tr>");
	ventana.document.write("<td> Apellido 1: " + objAlumno.Apellido1 + "</td>");
	ventana.document.write("</tr>");
	ventana.document.write("<tr>");
	ventana.document.write("<td> Apellido 2: " + objAlumno.Apellido2 + "</td>");
	ventana.document.write("</tr>");
	ventana.document.write("<tr>");
	ventana.document.write("<td> Numero Expediente: " + objAlumno.NExp + "</td>");
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

function agregarModulos(almacenModulos, modulo){
   var numModMatriculados = 0;
   var encontrado = false;
   
   if(almacenModulos.length > 0){
  
      for (var i = 0; i< almacenModulos.length; i++){
	     
		    if(almacenModulos[i].NombreModulo == modulo.NombreModulo){
		    encontrado = true;
			} 
		}
		
		if(encontrado == false){
		  //alert (modulo.NombreModulo);
		  numModMatriculados = almacenModulos.push(modulo);
		  alert("Grabado");
		}else
		 alert("Ya te has matriculado en este modulo");
		 
		
    }else{
		  //alert (modulo.NombreModulo);
		  numModMatriculados = almacenModulos.push(modulo);
		  alert("Grabado");
        }
		
   
}

function listarModulos(almacenModulos){

var ventana = window.open('','Modulos DAW Laguna de Joatzel');

ventana.document.write ("<table  align='center' border='1'>");
ventana.document.write ("<tr>");
ventana.document.write ("<td>Ciclo</td>");
ventana.document.write ("<td>Nombre</td>");
ventana.document.write ("<td>Numero de Horas</td>");
ventana.document.write ("<td>Curso</td>");
ventana.document.write ("</tr>");

for (var i = 0; i< almacenModulos.length; i++){
    ventana.document.write("<tr>");
    ventana.document.write("<td>");
    ventana.document.write(almacenModulos[i].Ciclo);
    ventana.document.write("</td>");
    ventana.document.write("<td>");
    ventana.document.write(almacenModulos[i].NombreModulo);
    ventana.document.write("</td>");
	ventana.document.write("<td>");
    ventana.document.write(almacenModulos[i].NumHoras);
    ventana.document.write("</td>");
	ventana.document.write("<td>");
    ventana.document.write(almacenModulos[i].Curso);
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

	ventana.document.write("Nombre:" + matricula.alumno.Nombre+ " ");
	ventana.document.write(matricula.alumno.Apellido1+ " ");
	ventana.document.write(matricula.alumno.Apellido2+ " ");
	ventana.document.write("NExp:" +matricula.alumno.NExp+ "<br>");

	for (var i = 0; i< matricula.alumno.Modulos.length; i++){
	ventana.document.write("Modulo "+i+":" +matricula.alumno.Modulos[i].NombreModulo +" ");
	ventana.document.write(matricula.alumno.Modulos[i].Ciclo +" ");
	ventana.document.write(matricula.alumno.Modulos[i].Curso +" ");
	ventana.document.write(matricula.alumno.Modulos[i].NumHoras +"<br>");
	}

    ventana.document.write ("<button  type='button' name='cmdCerrar' id='cmdCerrar' onclick='window.close();'>Cerrar</button>");
 }

function Matricular(almacenMatriculas, matricula){
alert("Estoy en Matricular");

  var NumAlumnos = 0;
  var encontrado = false;
   
   if(almacenMatriculas.length > 0){
  
      for (var i = 0; i< almacenMatriculas.length; i++){
	     
		    if(almacenMatriculas[i].matricula.alumno.NExp == matricula.alumno.NExp){
		    encontrado = true;
			} 
		}
		
		if(encontrado == false){
		  
		  NumAlumnos = almacenMatriculas.push(matricula);
		  alert("Grabado");
		}else
		 alert("Ya estas matriculado");
		 
		
    }else{
		 
		  NumAlumnos = almacenMatriculas.push(matricula);
		  alert("Grabado");
        }
		
	ponbotonAlumno(almacenMatriculas);
    inicializa();	
}	



function ponbotonAlumno(almacenMatriculas){	
	var cadena = "";
	
	for (var i =0; i< almacenMatriculas.length; i++){
	cadena = cadena + '<button type="button" name="alumno'+i+'" id="alumno'+i+'" onclick="verformularioAlumno();">Expediente: ' + almacenMatriculas[i].alumno.NExp + '</button>';
	}	
															
	barralateral.innerHTML = cadena;
	
			
}


function inicializa(){
/*
   objAlumno = new Alumno();
   var almacenModulos = new Array();
   var matricula = new Matricula(objAlumno);
   var almacenMatriculas = new Array();
  */ 
    document.getElementById('nombre').value = "";
	document.getElementById('apellido1').value="";
    document.getElementById('apellido2').value="";
	document.getElementById('nexpediente').value=0;
	document.getElementById('foto').value="";
	
	document.getElementById('verCarnet').disabled = true;
   
}

function verformularioAlumno(){

    document.getElementById('nombre').value= matricula.alumno.Nombre;
	document.getElementById('apellido1').value= matricula.alumno.Apellido1;
	document.getElementById('apellido2').value= matricula.alumno.Apellido2;
	document.getElementById('nexpediente').value= matricula.alumno.NExp;
	document.getElementById('foto').value= matricula.alumno.Foto;
	
	almacenModulos= matricula.alumno.Modulos  ;

}



















