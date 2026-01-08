import { Component, input } from '@angular/core';

@Component({
  selector: 'app-icons-card',
  imports: [],
  templateUrl: './icons-card.component.html',
  styleUrl: './icons-card.component.css',
})
export class IconsCardComponent {
  cardName = input.required<string>();
}
