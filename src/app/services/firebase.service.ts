import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { ListModel } from "../models/list";


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  URL: string = "https://dolist-85bdd.firebaseio.com/tareas";
  listas: ListModel [] = [];
  // // lista: ListModel;

  constructor( private http: HttpClient ) { }

  getListas(){

    return this.http.get(`${ this.URL }.json`)
          .pipe ( map( data => 
            {
              for ( let list in data ){

                if (this.listas.map(x => x.id).find(x => x === list)) {
                  break;
                }

                let lista: ListModel = {
                  id: list,
                  nombre: data[list].nombre,
                  descripcion: data[list].descripcion,
                  realizado: data[list].realizado,
                  fecha: data[list].fecha

                }
                
                if ( !this.listas.includes( lista ) ){
                 
                  this.listas.push( lista )
                  
                }

              }
              return this.listas;
          }) )
       
  }

  getTarea( id: string ){
    
    return this.http.get( `${ this.URL }/${ id }.json` )
            .pipe( map ( data  =>  data ) )
  }

  nuevaTarea( object: ListModel ){

    return this.http.post(`${ this.URL }.json`, object);

  }

  actualizarTarea( obj: ListModel, id: string ){

    return this.http.put(`${ this.URL }/${ id }.json`, obj );
  }

  eliminarTarea( id:string ){

   return this.http.delete(`${ this.URL }/${ id }.json`);
  }
}

