 
function objVenta (miProducto, miUnidades){
    this.producto = miProducto;
    this.unidades = miUnidades;
}   	


function agregarCarrito ( carrito, producto, numero ){
    
  //alert (producto);
  // alert (numero);
  var nuevaVenta =  new objVenta(producto, numero);
  var lineasVenta = 0;
  
    alert ("Ha comprado: "+ nuevaVenta.producto+ "/n" +"Unidades:  " + nuevaVenta.unidades );
 // alert (nuevaVenta.unidades);
  lineasVenta = carrito.push(nuevaVenta);
 // alert (lineasVenta);
  
    
    
}

function verCarrito (carrito){

var ventana = window.open('','Carrito DAW Laguna de Joatzel')   ;

ventana.document.write ("<table width='80' align='center' border='1'>");
ventana.document.write ("<tr>");
ventana.document.write ("<td>Unidades</td>");
ventana.document.write ("<td>Producto</td>");
ventana.document.write ("</tr>");

for (var i = 0; i< carrito.length; i++){
    ventana.document.write("<tr>");
    ventana.document.write("<td>");
    ventana.document.write(carrito[i].unidades);
    ventana.document.write("</td>");
    ventana.document.write("<td>");
    ventana.document.write(carrito[i].producto);
    ventana.document.write("</td>");
    
    ventana.document.write("</tr>");
    }
    ventana.document.write ("</table>");
    ventana.document.write("<button type='button' onclick='window.close();'>Cerrar</button>");
}

function validarNumero(posicion){

if (isNaN(document.getElementById("txtCantidad_" + posicion).value)){
         alert("La cadena introducida no es un numero. Introduce un numero");
		 document.getElementById("txtCantidad_" + posicion).value= "0";
      }
	  
	  
//con Keypress no te dejarian directamente poner letras. Pero si te pueden hacer un copia-pega. (Ctrl+c y Ctrl+v)
	  
/*
if (isNaN(cadena)){
        alert("La cadena introducida no es un numero.</br> Introduce un numero");
     }
	
*/
}
























