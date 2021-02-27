 
function objVenta (miProducto, miUnidades){
    this.producto = miProducto;
    this.unidades = miUnidades;
}   	


function agregarCarrito ( carrito, producto, numero ){
    
  //alert (producto);
  // alert (numero);
  
 
  var nuevaVenta =  new objVenta(producto, numero);
  var lineasVenta = 0;
  
  
  
  lineasVenta = carrito.push(nuevaVenta);
  
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
    ventana.document.write ("<br>");
    ventana.document.write ("<br>");
    ventana.document.write ("<br>");
    ventana.document.write ("<table border='0' align='center'>");
    ventana.document.write ("<tr><td>");
    ventana.document.write ("<button  type='button' name='cmdCerrar' id='cmdCerrar' onclick='window.close();'>Cerrar</button>");
    ventana.document.write ("</tr></td>");
    ventana.document.write ("</table>");
    
}

function validarUnidades (cadena){
    
    if (isNaN(cadena.value)){
                alert ("Debes escribir un número");
                objeto.value =  "0";
        
    }
}
/*
function solonumeros(){
    var letraASCII =  event.keyCode;//event variable global, que me permite acceder y obtener la información de ese evento. keyCode me dice el codigo acs de lo que se ha pulsado.
    
    if (letraASCII <48 || letraASCII > 57){
    alert ("Debes teclear numeros");
    return false;
    }
    else
    return true;
    
}
*/

function solonumeros(evento){ //para verlo en todos los navegadores
    var letraASCII =  evento.charCode;//event variable global, que me permite acceder y obtener la información de ese evento. keyCode me dice el codigo acs de lo que se ha pulsado.
    
    if (letraASCII <48 || letraASCII > 57){
    return false;
    }
    else
    return true;
    
}







