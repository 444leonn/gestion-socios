import { Component, resource, signal, inject } from '@angular/core';
import { AddButtonComponent } from "../../shared/components/add-button/add-button.component";
import { AddSportModalComponent } from "../../features/sports/components/add-sport-modal/add-sport-modal.component";
import { SportCardComponent } from "../../features/sports/components/sport-card/sport-card.component";
import { SportsService } from "../../core/services/sports.service";

@Component({
  selector: 'app-sports',
  imports: [AddButtonComponent, AddSportModalComponent, SportCardComponent],
  templateUrl: './sports.page.html',
  styleUrl: './sports.page.css',
})
export class SportsPage {
  private sportsService = inject(SportsService);
  mostrar = signal(false);
  
  Deportes = resource({
    loader: async () => {
      return await this.sportsService.getAll();
    }
  });
}
