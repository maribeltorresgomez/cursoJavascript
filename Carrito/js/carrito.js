function objDisco(nombre, autor, anio, precio){
	this.nombre=nombre;
	this.autor=autor;
	this.anio=anio;
	this.precio=precio;
}

function objVenta(producto, unidades){
	this.producto=producto;
	this.unidades=unidades;
}

var loureed=new objDisco("Transformer","Lou Reed",1972,9.95);
var doors=new objDisco("L. A. Woman","The Doors",1971,9.95);
var bowie=new objDisco("The man who sold the world","David Bowie",1971,8.95);
var zeppelin=new objDisco("III","Led Zeppelin",1970,8.95);

var discos=new Array(loureed, doors, bowie, zeppelin);

var carrito=new Array();

function agregarCarrito(producto, numero){
	alert(producto.nombre+"\nCantidad: "+numero); 
	var nuevaVenta=new objVenta(producto,numero);
	var productosCarrito=0;
	productosCarrito=carrito.push(nuevaVenta);
	alert("Productos añadidos al carrito: "+productosCarrito);
}


function noEsNumero(num){
	if(isNaN(document.getElementById("txtCantidad_"+num).value)){
		alert("Por favor, introduzca un número");
	}
}

function verCarrito(){
	var i;
	var ventana=window.open('','Carrito');
	ventana.document.write("<table border='1'>");
	ventana.document.write("<tr><td><p>Producto</p></td><td><p>Cantidad</p></td></tr>");
	for(i=0;i<carrito.length;i++){
		ventana.document.write("<tr>");
		ventana.document.write("<td padding='1'>");
		ventana.document.write(carrito[i].producto.nombre);
		ventana.document.write("</td>");
		ventana.document.write("<td>");
		ventana.document.write(carrito[i].unidades);
		ventana.document.write("</td>");
		ventana.document.write("</tr>");
	}
	ventana.document.write("</table>");
	ventana.document.write("<table border='0'>");
	ventana.document.write("<tr><td>");
	ventana.document.write("<button type='button' name='cerrar' id='cerrar' onclick='window.close();'>Cerrar</button>");
	ventana.document.write("</td></tr></table>");
}
