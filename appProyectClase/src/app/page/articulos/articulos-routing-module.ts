import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Ajuste: Importamos los nombres correctos de las clases (ListadoComponent y RegistroComponent)
import { ListadoComponent } from './components/listado/listado'; 
import { RegistroComponent } from './components/registro/registro';

const routes: Routes = [
  { 
    // Ruta: /articulos 
    path: '',  
    component: ListadoComponent  
  },
  { 
    // Ruta: /articulos/registro 
    path: 'registro', 
    component: RegistroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticulosRoutingModule { }