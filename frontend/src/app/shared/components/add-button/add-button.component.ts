import { Component, output } from '@angular/core';

@Component({
  selector: 'app-add-button',
  imports: [],
  templateUrl: './add-button.component.html',
  styleUrl: './add-button.component.css',
})
export class AddButtonComponent {
  toggle = output<void>();

  handleClick(): void {
    this.toggle.emit();
  }
}

// Usar `mostrar = signal(false);` en el componente que se quiera usar el boton
/* Ejemplo
*    <app-add-button (toggle)="mostrar.set(!mostrar())" />
*    @if (mostrar()) {
*       <componente />
*    }
*/
