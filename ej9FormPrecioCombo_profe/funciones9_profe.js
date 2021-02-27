function calculaPrecio (){
	var dPrecioBase;
	var strCategoria;
	var dTipoIva;

	dPrecioBase = parseFloat (document.formCalculaPrecio.txtPrecioBase.value);
	dCategoria = document.formCalculaPrecio.cmbCategoria.value;
	dTipoIva =  parseFloat(document.formCalculaPrecio.txtTipoIva.value);
	
	dPrecioBase =  dPrecioBase - dCategoria;
	
	if (document.formCalculaPrecio.chkRenove.checked){
		dPrecioBase =  dPrecioBase -document.formCalculaPrecio.chkRenove.value;
	}
	
	dPrecioBase =  dPrecioBase * (1+dTipoIva/100);
	
	document.formCalculaPrecio.lbPvp.value = "PVP: ..." + dPrecioBase ;
		
}

function limpiarFomulario () {
	
	document.formCalculaPrecio.txtPrecioBase.value = "0";
	document.formCalculaPrecio.cmbCategoria.value = 200;
	document.formCalculaPrecio.txtTipoIva.value = "21";
	document.formCalculaPrecio.lbPvp.value = "";
}





