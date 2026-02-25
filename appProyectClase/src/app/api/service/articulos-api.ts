import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs'; 
// Ajuste de ruta según tu captura de pantalla:
// Desde src/app/api/service bajamos a app, luego subimos a page
import { Articulo, ArticuloCreacion } from '../../page/articulos/models/articulo'; 

@Injectable({ 
  providedIn: 'root' 
}) 
export class ArticulosApiService { 
  // Definimos la URL base apuntando al backend en el puerto 8081
  private readonly URL_API = 'http://localhost:8081/api/articulos';

  constructor(private http: HttpClient) { } 

  // Listar artículos (GET)
  listarTodos(): Observable<Articulo[]> { 
    return this.http.get<Articulo[]>(this.URL_API); 
  } 

  // Registrar artículo (POST)
  registrar(data: ArticuloCreacion): Observable<Articulo> { 
    return this.http.post<Articulo>(this.URL_API, data); 
  } 
}