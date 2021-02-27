/**
 * @author Carlos
 */

function Producto(Marca, Modelo, Descripcion, Precio){
	this.Marca =Marca;
	this.Modelo= Modelo;
	this.Descripcion= Descripcion;
	this.Precio_base= Precio;
}

function Cliente(Codigo_cliente, Nombre, CIF){
	this.Codigo_cliente=Codigo_cliente;
	this.Nombre=Nombre;
	this.CIF=CIF;
}

function Venta(){
	this.cliente=Cliente;
	this.productos_comprados=Producto;
}