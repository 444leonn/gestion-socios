import { Component } from '@angular/core';
import { IconsLibraryComponent } from "../../components/icons-library/icons-library.component";
import { HomeCardComponent } from "../../components/home-card/home-card.component";

@Component({
  selector: 'app-home',
  imports: [IconsLibraryComponent, HomeCardComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css',
})
export class HomePage {

}
