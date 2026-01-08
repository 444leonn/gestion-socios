import { Component, input, output } from '@angular/core';
import { Deporte } from "../../../../core/models/deporte";
import { environment } from "../../../../../environments/environments";

@Component({
  selector: 'app-sport-card',
  imports: [],
  templateUrl: './sport-card.component.html',
  styleUrl: './sport-card.component.css',
})
export class SportCardComponent {
  deporte = input.required<Deporte>();
  onDeleted = output<void>();
  
  private apiUrl = environment.apiUrl;

  async handleClick(): Promise<void> {    
    try {
      const response = await fetch(`${this.apiUrl}/deportes/${this.deporte().id}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      
      this.onDeleted.emit();
    } catch (error) {
      console.error('Error deleting sport:', error);
    }
  }
}
