
var cesta;
var articulo;


   
/*function verCesta (cesta){
    document.write(cesta);
}*/

function verCesta (cesta) {    
    var cad="Cod  Nombre  Cantidad  Precio  Subtotal\n";
    var total=0;
    for(var i of cesta) {
        for (var prop in i) {
            cad += i[prop]+"          ";
        }
        cad+= (i.precio*i.cantidad).toFixed(2) +"\n";
        total += i.precio*i.cantidad;
    }
    cad += "                                        Total = "+total.toFixed(2)+" €";
    alert (cad);
}

function insertarArticulo (id){
   var nombre = prompt ("¿cuál es el artículo?");
    var precio = parseInt(prompt("¿Cuál es su precio?"));
    var cantidad = parseInt(prompt("¿Cuál es la cantidad?"));
        articulo = new Object();
        articulo.id = id;
        articulo.nombre = nombre;
        articulo.precio = parseInt(precio);
        articulo.cantidad = parseInt(cantidad);
        articulo.subtotal = precio*cantidad;
        
    cesta.push(articulo);
}

function borrarArticulo(id){
    var articuloBorrar = parseInt(prompt("¿Qué artículo quieres borrar? Introduce su id"));
    var index = 
    if()
    
}

function vaciarCesta(){
    cesta = [];
}

function menu(){
    cesta=[];
    articulo={};
    id=0;
  
    alert("1. Ver cesta.\n 2. Insertar artículo \n 3. Borrar un artículo \n 4. Vaciar cesta \n 5. Salir" );
   
   var opcion = prompt("¿Qué quieres hacer?");

    while (opcion!=0){
        if (opcion == 1){
            verCesta(cesta);
        }else if (opcion==2){
            id++;
            insertarArticulo(id);
        }else if (opcion==3){
            borrarArticulo();
        }else if(opcion==4){
            vaciarCesta();
        }else{
            opcion;
        }
        opcion = prompt("¿Qué quieres hacer?");  
    }
}
menu();

    
