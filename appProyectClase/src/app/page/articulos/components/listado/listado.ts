import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ArticulosService } from '../../services/articulos';
import { Articulo } from '../../models/articulo';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listado.html',
  styleUrls: ['./listado.css']
})
export class ListadoComponent implements OnInit {
  articulos: Articulo[] = [];
  cargando: boolean = true;
  errorMensaje: string | null = null;

  constructor(private articuloService: ArticulosService) { }

  ngOnInit(): void {
    this.cargarArticulos();
  }

  cargarArticulos(): void {
    this.cargando = true;
    this.errorMensaje = null;
    
    this.articuloService.obtenerArticulos().subscribe({
      next: (data) => {
        // Al asignar los datos, Angular podrá leer el .id en el HTML
        this.articulos = data;
        this.cargando = false;
      },
      error: (err) => {
        this.cargando = false;
        // Este error coincide con tu captura de pantalla
        this.errorMensaje = "Error de servidor: No se pudo conectar con el puerto 8081";
        console.error(err);
      }
    });
  }
}