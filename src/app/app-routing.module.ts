import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from "./components/lista/lista.component";
import { ListoComponent } from "./components/listo/listo.component";
import { TareaComponent } from "./components/tarea/tarea.component";
import { CreateComponent } from "./components/create/create.component";
import { EditarComponent } from "./components/editar/editar.component";


const routes: Routes = [
  { path: "", component: ListaComponent },
  { path: "tareas-realizadas",component: ListoComponent },
  { path: "tarea/:id", component: TareaComponent },
  { path: "nueva-tarea", component: CreateComponent },
  { path: "editar-tarea/:id", component: EditarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
