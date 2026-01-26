import { Component, signal, inject, resource } from '@angular/core';
import { AddButtonComponent } from "../../shared/components/add-button/add-button.component";
import { AddSocioModalComponent } from "../../features/socios/components/add-socio-modal/add-socio-modal.component"
import { SociosService } from '../../core/services/socios.service';
import { SociosTableComponent } from "../../features/socios/components/socios-table/socios-table.component";

@Component({
  selector: 'app-socios',
  imports: [AddSocioModalComponent, AddButtonComponent, SociosTableComponent],
  templateUrl: './socios.page.html',
  styleUrl: './socios.page.css',
})
export class SociosPage {
  private sociosService = inject(SociosService);
  mostrar = signal(false);

  Socios = resource({
    loader: async () => {
      return await this.sociosService.getAll();
    }
  });
}
