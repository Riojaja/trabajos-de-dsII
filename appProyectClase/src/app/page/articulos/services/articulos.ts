import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs'; 
// Ajuste: El archivo en tu captura se llama articulo.ts (no articulo.interface.ts)
import { Articulo, ArticuloCreacion } from '../models/articulo'; 
// Ajuste: La ruta correcta desde la carpeta services es subir 3 niveles para llegar a 'app'
import { ArticulosApiService } from '../../../api/service/articulos-api'; 

@Injectable({ 
  providedIn: 'root' 
}) 
export class ArticulosService { 

  constructor(private apiService: ArticulosApiService) { } 

  // Método de Listado 
  obtenerArticulos(): Observable<Articulo[]> { 
    // Aquí iría lógica avanzada de frontend (ej. manejo de estado global) 
    return this.apiService.listarTodos(); 
  } 

  // Método de Registro 
  registrarArticulo(data: ArticuloCreacion): Observable<Articulo> { 
    // Lógica de validación de frontend: 
    if (!data.nombre || data.nombre.trim().length < 5) { 
      throw new Error("El nombre debe tener al menos 5 caracteres (Error de Service Layer)."); 
    } 
    return this.apiService.registrar(data); 
  } 
}