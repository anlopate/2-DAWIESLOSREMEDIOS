class Cesta {

    articulos = [];

    constructor(){
        
    }

    verCesta(){
        if(this.articulos.length == 0){
            alert("Cesta vacía");
        }else{

            var mensaje = "Codigo  Nombre  Precio  Cantidad   Subtotal";
            mensaje+= "--------------------------------------------------";
           
            this.articulos.forEach((art,indice) =>{
                mensaje+=art[indice];
            });
        }

        return mensaje;
    }

    insertarArticulo(articulo){
        var articulo = new Articulo();
            this.id = this.articulos.length + 1;
            this.nombre = prompt("Nombre del artículo: ");
            this.precio = Number(prompt("Precio artículo: "));
            this.cantidad = Number(prompt("Cantidad articulos: "));
            this.subtotal = this.precio + this.cantidad;


        this.articulos.push(articulo);
    }

    borrarArticulo(){
        var artBorrar = Number(prompt("¿Qué artículo quiere borrar?"));

        if(

    }
}

class Articulo {

    codigo;
    nombre;
    precio;
    cantidad;
    subtotal;
    
    constructor(codigo,nombre,precio,cantidad){
        this.codigo = codigo;
        this.nombre=nombre;
        this.precio=precio;
        this.cantidad=cantidad;
        this.subtotal=this.precio*this.cantidad;

    }


}