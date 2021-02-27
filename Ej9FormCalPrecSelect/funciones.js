function calculaPrecio (){
	var dPrecioBase;
	var strCategoria;
	var dTipoIva;

	dPrecioBase = parseFloat (document.formCalculaPrecio.txtPrecioBase.value);
	strCategoria = document.formCalculaPrecio.cmbCategoria.value;
	dTipoIva =  parseFloat(document.formCalculaPrecio.txtTipoIva.value);
    planRenove= document.formCalculaPrecio.planRenove.value;
	
		/*
	Tres formas de llamar a los elementos de un formulario
	alert (document.formCalculaPrecio.txtPrecioBase.value);
	
	alert(document.forms[0].txtCategoria.value);
	
	alert(document.getElementById("txtTipoIva").value);
	
	
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
	*/
	dPrecioBase= dPrecioBase - strCategoria;
	dPrecioBase=  dPrecioBase * (1+dTipoIva/100);
	
	document.formCalculaPrecio.lbPvp.value = "PVP: ..." + dPrecioBase ;
		
}

function limpiarFomulario () {
	
	document.formCalculaPrecio.txtPrecioBase.value = "0";
	document.formCalculaPrecio.cmbCategoria.value =200;
	document.formCalculaPrecio.txtTipoIva.value = "21";
	document.formCalculaPrecio.lbPvp.value = "";
}
