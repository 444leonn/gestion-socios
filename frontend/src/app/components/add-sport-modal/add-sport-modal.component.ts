import { Component, Output, EventEmitter, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Deporte } from '../../models/deporte';
import { environment } from '../../../environments/environments';

@Component({
  selector: 'app-add-sport-modal',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-sport-modal.component.html',
  styleUrl: './add-sport-modal.component.css',
})
export class AddSportModalComponent {
  private apiUrl = `${environment.apiUrl}/deportes`;
  loading = signal(false);
  error = signal<string | null>(null);
  
  @Output() closeModal = new EventEmitter<void>();
  
  deporte: Deporte = {
    nombre: ''
  };
  
  onCancel() {
    this.closeModal.emit();
  }
  
  async create() {
    this.loading.set(true);
    this.error.set(null);

    try {
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nombre: this.deporte.nombre
        })
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      this.closeModal.emit();
    } catch (err) {
      this.error.set(err instanceof Error ? err.message : 'Error al crear');
    } finally {
      this.loading.set(false);
    }
  }
  
  async onSubmit(form: any) {
    if (form.valid) {
      await this.create();
    }
  }
}

// Usar dentro del add-button con 
// `<app-add-sport-modal (closeModal)="mostrar.set(false)" />`
/* Ejemplo
*  <app-add-button (toggle)="mostrar.set(!mostrar())" />
*  @if (mostrar()) {
*    <app-add-sport-modal (closeModal)="mostrar.set(false)" />
*  }
*/