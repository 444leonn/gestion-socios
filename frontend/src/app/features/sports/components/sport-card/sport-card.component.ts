import { Component, input, output, inject } from '@angular/core';
import { Deporte } from "../../../../core/models/deporte";
import { environment } from "../../../../../environments/environments";
import { SportsService } from '../../../../core/services/sports.service';

@Component({
  selector: 'app-sport-card',
  imports: [],
  templateUrl: './sport-card.component.html',
  styleUrl: './sport-card.component.css',
})
export class SportCardComponent {
  deporte = input.required<Deporte>();
  onDeleted = output<void>();
  
  private sportsService = inject(SportsService);

  async handleClick(): Promise<void> {    
    try {
      const deporteId = this.deporte().id;
      if (deporteId === undefined) {
        console.error('Sport ID is undefined');
        return;
      }
      await this.sportsService.delete(deporteId);
      this.onDeleted.emit();
    } catch (error) {
      console.error('Error deleting sport:', error);
    }
  }
}
