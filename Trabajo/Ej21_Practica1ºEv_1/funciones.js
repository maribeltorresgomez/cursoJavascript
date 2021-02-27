function verCapa (ver, ocultar){ 		
       ver.style.visibility='visible';
       ocultar.style.visibility = 'hidden';
}
			
function Alumno(pNombre, pApellido1, pApellido2, pNExp, pFoto){
	
	this.Nombre = pNombre;
	this.Apellido1 = pApellido1;
	this.Apellido2 = pApellido2;
	this.NExp = pNExp;
	this.Foto = pFoto;
	this.imprimeCarnet = verCarnet;
	this.Modulos = new Array();
	
	
}

function Modulo(pCiclo, pNombreModulo, pNumHoras, pCurso){
    this.Ciclo = pCiclo;
	this.NombreModulo = pNombreModulo;
	this.NumHoras = pNumHoras;
	this.Curso = pCurso;
}

function Matricula(objAlumno){
	this.alumno = objAlumno;
	this.Modulos= agregarModulos;
    
}

function grabarAlumno(){
	

	objAlumno.Nombre=document.getElementById('nombre').value;
	objAlumno.Apellido1=document.getElementById('apellido1').value;
	objAlumno.Apellido2=document.getElementById('apellido2').value;
	objAlumno.NExp=document.getElementById('nexpediente').value;
	objAlumno.Foto=document.getElementById('foto').value;
	
	document.getElementById('verCarnet').disabled = false;
	
}



function verCarnet(){
	var ventana = window.open('','');
	
	ventana.document.write("<table border='2'");
	ventana.document.write("<tr>");
	ventana.document.write("<td><img src='" + this.Foto + "'></td>");
	ventana.document.write("<td> Nombre: " + this.Nombre + "</td>");
	ventana.document.write("</tr>");
	ventana.document.write("<tr>");
	ventana.document.write("<td> Apellido 1: " + this.Apellido1 + "</td>");
	ventana.document.write("</tr>");
	ventana.document.write("<tr>");
	ventana.document.write("<td> Apellido 2: " + this.Apellido2 + "</td>");
	ventana.document.write("</tr>");
	ventana.document.write("<tr>");
	ventana.document.write("<td> Numero Expediente: " + this.NExp + "</td>");
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
		 alert("Ya te has matriculado en este curso");
		 
		
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

























