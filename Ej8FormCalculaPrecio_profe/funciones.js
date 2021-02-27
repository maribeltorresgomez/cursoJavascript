function calculaPrecio (){
	var dPrecioBase;
	var strCategoria;
	var dTipoIva;

	dPrecioBase = parseFloat (document.formCalculaPrecio.txtPrecioBase.value);
	strCategoria = document.formCalculaPrecio.txtCategoria.value;
	dTipoIva =  parseFloat(document.formCalculaPrecio.txtTipoIva.value);
	
	switch (strCategoria){
		case "A":
		  dPrecioBase =  dPrecioBase - 200;
		  break;
		case "B":
		  dPrecioBase =  dPrecioBase - 100;
		  break;
		case "C":
		  dPrecioBase =  dPrecioBase - 50;
		  break;
		case "D":
		  dPrecioBase =  dPrecioBase - 25;
		  break;
	}
	dPrecioBase=  dPrecioBase * (1+dTipoIva/100);
	
	document.formCalculaPrecio.lbPvp.value = "PVP: ..." + dPrecioBase ;
		
}

function limpiarFomulario () {
	
	document.formCalculaPrecio.txtPrecioBase.value = "0";
	document.formCalculaPrecio.txtCategoria.value = "A";
	document.formCalculaPrecio.txtTipoIva.value = "21";
	document.formCalculaPrecio.lbPvp.value = "";
}





