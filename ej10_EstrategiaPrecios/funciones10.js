function calculaPrecio (){
	var dPrecioBase;
	var dDescuento;
	var dTipoIva;
	var dPrecioFinal;

	dPrecioBase = parseFloat (document.formCalculaPrecio.txtPrecioBase.value);
	dDescuento = parseFloat(document.formCalculaPrecio.txtDescuento.value);
	dTipoIva =  document.formCalculaPrecio.txtTipoIva.value;
	//dPrecioFinal = estrategiaPrecios1( dPrecioBase, 10, 21);
	//alert (dPrecioFinal);
	
	
	dPrecioFinal = estrategiaPrecios2( dPrecioBase, dDescuento, dTipoIva);
	document.formCalculaPrecio.lbPvp.value = "PVP: ..." + dPrecioFinal ;
		
}

function limpiarFomulario () {
	
	document.formCalculaPrecio.txtPrecioBase.value = "0";
	document.formCalculaPrecio.txtDescuento.value = "0";
	document.formCalculaPrecio.txtTipoIva.value = "21";
	document.formCalculaPrecio.lbPvp.value = "";
}


function estrategiaPrecios1(precio, tipoDescuento, tipoIva){

	alert(precio);
	precio=precio + 100;
	return precio;
}

function estrategiaPrecios2(precio, tipoDescuento, tipoIva){ //si tuviera esta funcion en otro fichero tendría que incluir otro script con esta nueva ruta. Es logico separar las funciones en otros archvos

	var fechaHoy=new Date();
	var diaSemana;
	alert(fechaHoy);
	alert(fechaHoy.getDay()); // me devuelve el numero del dia de la semana, el domingo es el 0
	
	diaSemana = fechaHoy.getDay();
	
	if (diaSemana == 5 || diaSemana == 6) {
	          precio=precio - 50;
	
	}
	
	alert(navigator.appName);
	
	precio=precio *(1-tipoDescuento/100);
	precio= precio *(1+tipoIva/100);
	return precio;
}
