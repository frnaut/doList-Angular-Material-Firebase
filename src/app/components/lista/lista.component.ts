import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "../../services/firebase.service";
import { ListModel } from 'src/app/models/list';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  listas: ListModel[] = [];
  numLista: number;


  constructor( private _firebase: FirebaseService ) {

    this.getLista();
  
  }

  ngOnInit() {
    this.numLista = this.listas.length;
  }

  getLista(){
    this._firebase.getListas()
          .subscribe( (data: ListModel[]) => this.listas = data)

  }

}
