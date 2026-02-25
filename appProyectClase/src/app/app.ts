import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router'; // 1. Agregamos RouterModule

@Component({
  selector: 'app-root',
  standalone: true, // Asegúrate de que tenga esta línea
  imports: [RouterOutlet, RouterModule], // 2. Agregamos RouterModule aquí también
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('appProyectClase');
}