idTareaSelect: string ="";

selectTarea(idTarea:string, tareaSelect:Tarea){
    this.tareaEditando = tareaSelect;
    this.idTareaSelect = idTarea;
    
}

clicBotonBorrar(){
    this.fireStoreService.borrar("tareas", this.idTareaSelect).then(()=>{
        console.log('Tarea borrada correctamente');
        this.tareaEditando={} as 
    })
}