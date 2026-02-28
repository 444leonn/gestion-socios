import { Component, input } from '@angular/core';

interface homeCard {
    name: string,
    logo: string,
    spec: string,
    color: string,
}

@Component({
  selector: 'app-home-card',
  imports: [],
  templateUrl: './home-card.component.html',
  styleUrl: './home-card.component.css',
  host: {
    '[style.--card-color]': 'cardInfo().color'
  }
})
export class HomeCardComponent {
    cardInfo = input.required<homeCard>();
}
