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
	
}

function Modulo(pCiclo, pNombreModulo, pNumHoras, pCurso){
    this.Ciclo = pCiclo;
	this.NombreModulo = pNomnbreModulo;
	this.NumHoras = pNumHoras;
	this.Curso = pCurso;
}

function Matricula(){
	this.alumno = new Alumno();
	this.Modulos= array();
    
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
	
}

