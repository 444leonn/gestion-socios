import { Component } from '@angular/core';
import { HomeCardComponent } from "../../features/home/components/home-card/home-card.component";

@Component({
  selector: 'app-home',
  imports: [HomeCardComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css',
})
export class HomePage {

}
