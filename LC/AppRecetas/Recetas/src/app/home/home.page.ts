import { Component } from '@angular/core';
import {Receta} from './Receta';
import { FirestoreService } from '../firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  recetaEdit = {} as Receta;
  idRecetaSelect: string ="";
  arrayColeccionRecetas: any = [{
    id: "",
    nombre: {} as Receta,
    numeroComensales: 0,
    tiempoEstimado: 0,
    tipologia: "",
    ingredientes: "",
    elaboracion: "",
  }];

  constructor(private firestoreService: FirestoreService) {
    this.obtenerRecetas();

  }

  clicBotonInsertar(){
    this.firestoreService.insertar("receta",this.recetaEdit).then(()=>{
      console.log("Receta creada correctamente");
      this.recetaEdit={}as Receta;
    }, (error)=>{
      console.log(error);
    });
  }

  obtenerRecetas(){
    this.firestoreService.consultar("recetas").subscribe((datosRecibidos) => {
      this.arrayColeccionRecetas = [];
      datosRecibidos.forEach((datosReceta) => {
        this.arrayColeccionRecetas.push({
          id: datosReceta.payload.doc.id,
          receta: datosReceta.payload.doc.data()
        })
      });
    });
  }

  selecReceta(idReceta:string, recetaSelect:Receta){
    this.recetaEdit = recetaSelect;
    this.idRecetaSelect = idReceta;
  }

  clicBotonBorrar(){
    this.firestoreService.borrar("recetas", this.idRecetaSelect).then(()=>{
      console.log('Receta borrada correctamente');
      this.recetaEdit = {} as Receta;
      this.idRecetaSelect = "";
    }, (error) => {
      console.error(error);
    });
    
  }

  clicBotonModificar(){
    this.firestoreService.modificar("recetas", this.idRecetaSelect, this.recetaEdit).then(()=>{
      console.log('Receta modificada correctamente');
    }, (error) => {
      console.error(error);
    });
    
  }
  }


