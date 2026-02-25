import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 

import { ArticulosRoutingModule } from './articulos-routing-module'; 
// Ajuste de rutas según tu imagen: los archivos se llaman listado.ts y registro.ts
import { ListadoComponent } from './components/listado/listado'; 
import { RegistroComponent } from './components/registro/registro'; 

@NgModule({ 
  // IMPORTANTE: Al ser Standalone, se mueven de 'declarations' a 'imports'
  declarations: [], 
  imports: [ 
    CommonModule, 
    FormsModule, 
    ArticulosRoutingModule,
    ListadoComponent, // Se importa como si fuera un módulo
    RegistroComponent  // Se importa como si fuera un módulo
  ] 
}) 
export class ArticulosModule { }