import { Component } from '@angular/core';
import { ListModel } from 'src/app/models/list';
import { FirebaseService } from "../../services/firebase.service";

@Component({
  selector: 'app-listo',
  templateUrl: './listo.component.html',
  styleUrls: ['./listo.component.css']
})
export class ListoComponent {
  
  listas: ListModel[] = []

  constructor( private _firebase: FirebaseService ) { 
    
    this.getListas();
  }

  getListas(){

    this._firebase.getListas()
        .subscribe( data => this.listas = data )
  }
  

}
