import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { ArticulosService } from '../../services/articulos';
import { ArticuloCreacion } from '../../models/articulo';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './registro.html',
  styleUrls: ['./registro.css']
})
export class RegistroComponent {
  nuevoArticulo: ArticuloCreacion = { nombre: '' };
  mensaje: string | null = null;
  cargando = false;
  
  // SOLUCIÓN: Agregamos la variable 'status' que el HTML está pidiendo
  status: 'success' | 'error' | null = null; 

  constructor(
    private articuloService: ArticulosService,
    private router: Router
  ) { }

  onSubmit(): void {
    this.cargando = true;
    this.mensaje = null;
    this.status = null; // Limpiamos el estado al iniciar

    this.articuloService.registrarArticulo(this.nuevoArticulo).subscribe({
      next: (articuloCreado) => {
        // Asignamos 'success' para que el HTML use las clases de éxito
        this.status = 'success'; 
        this.mensaje = `¡Registro con éxito! ID asignado: ${articuloCreado.id}`;
        this.cargando = false;
        
        setTimeout(() => this.router.navigate(['/articulos']), 2000);
      },
      error: (errorRespuesta) => {
        // Asignamos 'error' para que el HTML se ponga en rojo
        this.status = 'error';
        this.mensaje = `Error de servidor: ${errorRespuesta.error?.message || 'No se pudo conectar'}`;
        this.cargando = false;
      }
    });
  }
}