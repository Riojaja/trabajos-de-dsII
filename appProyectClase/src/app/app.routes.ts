// src/app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'articulos',
    loadChildren: () => import('./page/articulos/articulos-module').then(m => m.ArticulosModule)
  },
  {
    path: '', 
    redirectTo: 'articulos', 
    pathMatch: 'full' 
  }
];