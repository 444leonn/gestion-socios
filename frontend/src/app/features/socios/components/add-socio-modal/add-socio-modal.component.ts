import { Component, output, signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Socio } from "../../../../core/models/socio"
import { SociosService } from "../../../../core/services/socios.service";

@Component({
  selector: 'app-add-socio-modal',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-socio-modal.component.html',
  styleUrl: './add-socio-modal.component.css',
})
export class AddSocioModalComponent {  
  private sociosService = inject(SociosService); // Inyectar el servicio
  
  mostrar = signal(false);
  loading = signal(false);
  error = signal<string | null>(null);
  
  closeModal = output<void>();
  socioCreated = output<void>();
  
  socio: Socio = {
    id: 0,
    nombre: '',
    apellido: '',
    fechaNacimiento: '',
    fechaAlta: '',
    dni: 0,
    telefono: '',
    mail: '',
    calle: '',
    altura: 0,
    cp: 0,
    localidad: '',
    titularId: 0,
    titularNombre: '',
    tipoSocioId: 0,
    tipoSocioNombre: '',
    adherentesIds: [0],
  };
  
  onCancel() {
    this.closeModal.emit();
  }
  
  async create() {
    this.loading.set(true);
    this.error.set(null);

    try {
      await this.sociosService.create({
        nombre: this.socio.nombre,
        apellido: this.socio.apellido,
        fechaNacimiento: this.socio.fechaNacimiento,
        fechaAlta: this.socio.fechaAlta,
        dni: this.socio.dni,
        telefono: this.socio.telefono,
        mail: this.socio.mail,
        calle: this.socio.calle,
        altura: this.socio.altura,
        cp: this.socio.cp,
        localidad: this.socio.localidad,
        titularId: this.socio.titularId,
        tipoSocioId: this.socio.tipoSocioId,
        adherentesIds: this.socio.adherentesIds,
      });

      this.socioCreated.emit();
      this.closeModal.emit();
    } catch (err: unknown) {
      this.error.set(err instanceof Error ? err.message : 'Error al crear socio');
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
// `<app-add.socio-modal (closeModal)="mostrar.set(false)" />`
/* Ejemplo
*  <app-add-button (toggle)="mostrar.set(!mostrar())" />
*  @if (mostrar()) {
*    <app-add.socio-modal (closeModal)="mostrar.set(false)" />
*  }
*/