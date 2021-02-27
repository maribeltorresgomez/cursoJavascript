function agregarValor( almacen, valor){ //almacen = array puedo reutilizarlo siempre
		var numero;
		numero = array_meses.push(valor);
		alert(numero);
}
		
		
function verContenido(almacen){
	alert(almacen.join('-'));
	var ventana =  window.open ("","Contenido del array");	
	//ventana.document.write(almacen.join('-'));
	ventana.document.write("<table border='1' align='center'>");
	for(i=0; i<almacen.length; i++){
	ventana.document.write("<tr>");
	ventana.document.write("<td>");
	ventana.document.write(i+1);
	ventana.document.write("</td>");
	ventana.document.write("<td>");
	ventana.document.write(almacen[i]);
	ventana.document.write("</td>");
	ventana.document.write("</tr>");
	}
	ventana.document.write("</table>");


ventana.document.write("<button  type='button' name='cmdCerrar' onclick='window.close();'>Cerrar</button>");
}



//ventana.document.write ("<button  type='button' name='cmdCerrar' id='cmdCerrar' onclick='window.close();;'>Cerrar</button>");