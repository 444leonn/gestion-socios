import { Component, resource, signal } from '@angular/core';
  import { AddButtonComponent } from "../../shared/components/add-button/add-button.component";
import { AddSportModalComponent } from "../../features/sports/components/add-sport-modal/add-sport-modal.component";
import { SportCardComponent } from "../../features/sports/components/sport-card/sport-card.component";
import { Deporte } from "../../core/models/deporte";
import { environment } from '../../../environments/environments';

@Component({
  selector: 'app-sports',
  imports: [AddButtonComponent, AddSportModalComponent, SportCardComponent],
  templateUrl: './sports.page.html',
  styleUrl: './sports.page.css',
})
export class SportsPage {
  mostrar = signal(false);
  private apiUrl = `${environment.apiUrl}/deportes`;
  
  Deportes = resource({
    loader: async () => {
      const response = await fetch(this.apiUrl);

      if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
      }
      return response.json() as Promise<Deporte[]>
    }
  });
}
