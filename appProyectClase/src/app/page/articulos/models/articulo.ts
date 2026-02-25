export interface Articulo { 
  id: number; 
  nombre: string; 
  // Añadir aquí otros campos que el backend devuelve 
} 
 
// DTO para la solicitud de creación (ArticuloCreacion) 
export interface ArticuloCreacion { 
  nombre: string; 
} 