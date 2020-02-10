import { Component } from '@angular/core';
import { FirebaseService } from "../../services/firebase.service";
import { ListModel } from 'src/app/models/list';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent  {

  tarea: ListModel = {
    id: '',
    nombre: '',
    descripcion: '',
    realizado: false,
    fecha: undefined
  }

  constructor( private _firebase: FirebaseService ) { }

  nuevaTarea( form: NgForm ){

    console.log( form )
    if ( form.valid ){
      this.tarea.nombre = form.value.nombre;
      this.tarea.descripcion = form.value.descripcion;
      this.tarea.fecha = form.value.fecha;
      
      this._firebase.nuevaTarea( this.tarea )
          .subscribe( data => console.log( data ) );
    }
    // this._firebase.nuevaTarea( object ).subscribe();
  }

}
