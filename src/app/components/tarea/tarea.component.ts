import { Component } from '@angular/core';
import { FirebaseService } from "../../services/firebase.service";
import { ActivatedRoute } from "@angular/router";
import { ListModel } from 'src/app/models/list';
import { Location } from "@angular/common";


@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent {

  tarea: ListModel;

  constructor( private _firebase: FirebaseService,
               private _actRouter : ActivatedRoute,
               private _location: Location ) 
    {
      let id = _actRouter.snapshot.params.id;
      this.getTarea(id);
  }

  getTarea( id: string ){
    
    this._firebase.getTarea( id ).subscribe( (data: ListModel) => {
      
      this.tarea = data
      this.tarea.id = id;
  
    } )
    
  }

  eliminarTarea( id: string ){
    
    let resp = confirm("Esta seguro que desea eliminar esta tarea?");
    
    if ( resp ) {
      this._firebase.eliminarTarea( id ).toPromise()
      this._location.back()
    }


  }
}
