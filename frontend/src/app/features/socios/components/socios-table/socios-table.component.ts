import { Component, output, inject, resource } from '@angular/core';
import { SociosService } from '../../../../core/services/socios.service';

@Component({
  selector: 'app-socios-table',
  imports: [],
  templateUrl: './socios-table.component.html',
  styleUrl: './socios-table.component.css',
})
export class SociosTableComponent {
  private sociosService = inject(SociosService);
  onDeleted = output<void>();

  Socios = resource({
    loader: async () => {
      return await this.sociosService.getAll();
    }
  });

  async handleClick(id: number | undefined): Promise<void> {    
    try {
      if (id === undefined) {
        console.error('Socio ID is undefined');
        return;
      }
      await this.sociosService.delete(id);
      this.onDeleted.emit();
    } catch (error) {
      console.error('Error deleting sport:', error);
    }
  }
}
