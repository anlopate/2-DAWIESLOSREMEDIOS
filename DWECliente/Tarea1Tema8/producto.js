class Producto {

    #codigo;
    #nombre;
    #unidades;
    #precio;
    #subtotal;

    constructor(codigo,nombre,unidades,precio) {  
        this.#codigo=codigo;
        this.#nombre=nombre;
        this.#unidades=unidades;
        this.#precio=precio;
        this.#subtotal=precio*unidades;
        }

   

}