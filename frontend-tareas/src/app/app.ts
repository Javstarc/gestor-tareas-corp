import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  http = inject(HttpClient);
  
  // Usamos Signals: El nuevo estándar de Angular para actualizar la pantalla al instante
  mensajeBackend = signal('Esperando conexión con Spring Boot... ⏳');
  estado = signal<'esperando' | 'exito' | 'error'>('esperando');

  probarConexion() {
    this.mensajeBackend.set('Conectando...');
    
    this.http.get('http://localhost:8080/api/tareas/ping', { responseType: 'text' })
      .subscribe({
        next: (respuesta) => {
          this.mensajeBackend.set(respuesta); // Actualizamos la señal con éxito
          this.estado.set('exito');
        },
        error: (error) => {
          this.mensajeBackend.set('¡Error al conectar! Revisa que Java esté corriendo.');
          this.estado.set('error');
          console.error(error);
        }
      });
  }
}