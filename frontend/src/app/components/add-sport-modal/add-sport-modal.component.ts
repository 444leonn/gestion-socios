import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Deporte } from '../../models/deporte';

@Component({
  selector: 'app-add-sport-modal',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-sport-modal.component.html',
  styleUrl: './add-sport-modal.component.css',
})
export class AddSportModalComponent {
  @Output() closeModal = new EventEmitter<void>();
  
  deporte: Deporte = {
    nombre: ''
  };
  
  onCancel() {
    this.closeModal.emit();
  }
  
  onSubmit(form: any) {
    if (form.valid) {
      this.closeModal.emit();
    }
  }
}

// Usar dentro del add-button con 
// `<app-add-sport-modal (closeModal)="mostrar.set(false)" />`