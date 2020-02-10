import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";
import { FirebaseService } from "../../services/firebase.service";
import { ListModel } from 'src/app/models/list';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  tarea: ListModel = {
    nombre: '',
    descripcion: '',
    fecha: undefined,
    realizado: true,
    id: ''
  }


  constructor( private _firebase: FirebaseService,
               private _actRouter: ActivatedRoute) 
   {
  }
  
  ngOnInit() {
    
    this.getTarea(this._actRouter.snapshot.params.id)
  }

  actualizarTarea( form: NgForm ){
    if ( form.valid ){
      this.tarea.nombre = form.value.nombre;
      this.tarea.descripcion = form.value.descripcion;
      this.tarea.fecha = form.value.fecha;
      this.tarea.realizado = form.value.realizado;
      this.tarea.id = this._actRouter.snapshot.params.id; 
      
      this._firebase.actualizarTarea(this.tarea, this.tarea.id ).toPromise()
      console.log(this.tarea);
    }
    
    console.log( form )
  }

  getTarea( id: string ){

    this._firebase.getTarea( id ).subscribe((data:ListModel) => {

      this.tarea.nombre = data.nombre;
      this.tarea.descripcion = data.descripcion;
      this.tarea.id = data.id;
      this.tarea.realizado = data.realizado;
      this.tarea.fecha = data.fecha;

    })
  }
}
