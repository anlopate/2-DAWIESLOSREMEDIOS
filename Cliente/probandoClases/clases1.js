class Coche {

    marca;
    #modelo;

    constructor(marca, modelo){
        this.marca = marca;
        this.#modelo = modelo;
        //this.marca = function(){return this.marca};    
    }

    //#nombre(){return this.#marca + " " + this.#modelo};
    //nombre1(){return this.#nombre()};

}

var coche = new Coche ("Renault","307");

console.log(coche.marca);