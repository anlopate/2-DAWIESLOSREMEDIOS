class Empleado {
    nombre;
    apellido;
    #edad;

    constructor(nombre,apellido,edad){
        this.nombre = nombre;
        this.apellido= apellido;
        this.#edad = edad;
    }
    
    muestra() { return(this.nombre + " " + this.apellido + " " + this.#edad) }
   
}

var emple = new Empleado("Paco","Perez",23);

//console.log(emple.muestra());

class Profesor extends Empleado {

    cargo;

    constructor(nombre,apellido,edad,cargo){
        super(nombre,apellido,edad);
        this.cargo = cargo;
    }

    muestraCargo(){return this.cargo};
}

var profe = new Profesor("Ana","Atero",33, "profe programación");

console.log(profe.muestra() + " " + profe.muestraCargo());