import { Component, output, signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Deporte } from "../../../../core/models/deporte";
import { AddButtonComponent } from "../../../../shared/components/add-button/add-button.component";
import { IconsLibraryComponent } from "../../../icons/components/icons-library/icons-library.component";
import { SportsService } from "../../../../core/services/sports.service";

@Component({
  selector: 'app-add-sport-modal',
  imports: [FormsModule, CommonModule, AddButtonComponent, IconsLibraryComponent],
  templateUrl: './add-sport-modal.component.html',
  styleUrl: './add-sport-modal.component.css',
})
export class AddSportModalComponent {
  private sportsService = inject(SportsService);
  
  mostrar = signal(false);
  loading = signal(false);
  error = signal<string | null>(null);
  
  closeModal = output<void>();
  sportCreated = output<void>();
  
  deporte: Deporte = {
    nombre: '',
    imagen: ''
  };
  
  onCancel() {
    this.closeModal.emit();
  }
  
  async create() {
    this.loading.set(true);
    this.error.set(null);

    try {
      await this.sportsService.create({
        nombre: this.deporte.nombre,
        imagen: this.deporte.imagen,
      });

      this.sportCreated.emit();
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