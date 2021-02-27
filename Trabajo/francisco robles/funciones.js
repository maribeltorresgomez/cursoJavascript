
function muestraDatosCompra(valor){
	
	if(valor == true){
		document.getElementById('datos-compra').style.display="block";
		document.getElementById('articulos-compra').style.display="none";
	} else {
		document.getElementById('datos-compra').style.display="none";
		document.getElementById('articulos-compra').style.display="block";
	}
	
}


var array_productos = new Array();
var array_tienda = new Array();




function Producto(marca, modelo, descripcion, precioBase){
	this.marca = marca;
	this.modelo = modelo;
	this.descripcion = descripcion;
	this.precioBase = precioBase;
}


function Cliente(codCliente, nombre, CIF){
	this.codCliente = codCliente;
	this.nombre = nombre;
	this.CIF = CIF;
}

function Venta(cliente, productosComprados, nVenta){
	this.cliente = cliente;
	this.productosComprados = productosComprados;
	this.nVenta = nVenta;
}

function creaTienda(){
    
	array_tienda[0]= new Producto("Raton", "Sony xs", "raton gaming", 50);
	array_tienda[1]= new Producto("Teclado", "Samsung", "teclado mecanico", 80);
	array_tienda[2]= new Producto("Pantalla", "Acer xl", "Pantalla gaming", 200);
	array_tienda[3]= new Producto("Alfombrilla", "Steelseries", "Alfombrilla grande", 23);
	array_tienda[4]= new Producto("Silla", "Comfort", "Silla de escritorio", 350);
	
	for(i=0; i < array_tienda.length; i++){
	    
		document.getElementById("articulos").innerHTML+="<tr style='background-color: white;'><td>"+array_tienda[i].marca + "</td><td>"+array_tienda[i].modelo+"</td><td>"+array_tienda[i].descripcion+"</td><td>"+ array_tienda[i].precioBase+"</td></tr>";
	}
}
