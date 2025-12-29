import { Component, input } from '@angular/core';
import { Deporte } from '../../models/deporte';

@Component({
  selector: 'app-sport-card',
  imports: [],
  templateUrl: './sport-card.component.html',
  styleUrl: './sport-card.component.css',
})
export class SportCardComponent {
  deporte = input.required<Deporte>();
}
