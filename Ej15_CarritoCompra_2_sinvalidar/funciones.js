 
function objVenta (miProducto, miUnidades){
    this.producto = miProducto;
    this.unidades = miUnidades;
}   	


function agregarCarrito ( carrito, producto, numero ){
    
  //alert (producto);
  // alert (numero);
  var nuevaVenta =  new objVenta(producto, numero);
  var lineasVenta = 0;
  
  alert (nuevaVenta.producto);
  alert (nuevaVenta.unidades);
  lineasVenta = carrito.push(nuevaVenta);
  alert (lineasVenta);
  
    
    
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



