function agregarValor(almacen, valor){
       var numero;
       numero = almacen.push(valor);
       alert (numero);
        
        }


function verContenido (almacen){
           var i;
           var ventana =  window.open ('', 'Contenido del array');
           
           ventana.document.write ("<br>");
           ventana.document.write ("<br>");
           ventana.document.write ("<table border='1' align='center'>");
           for (i =0; i< almacen.length; i++  ){
               ventana.document.write ("<tr>");
               ventana.document.write ("<td>");
               ventana.document.write (i+1);
               ventana.document.write ("</td>"); 
               ventana.document.write ("<td>");
               ventana.document.write (almacen[i]);
               ventana.document.write ("</td>");
               ventana.document.write ("</tr>");
           }
               ventana.document.write ("<br>");
           ventana.document.write ("<br>");
           ventana.document.write ("<table>");
            ventana.document.write ("<table border='0' align='center'>");
            ventana.document.write ("<tr><td>");
           ventana.document.write ("<button  type='button' name='cmdCerrar' id='cmdCerrar' onclick='window.close();'>Cerrar</button>");
           ventana.document.write ("</tr></td>");
           ventana.document.write ("</table>");
        }
        