import { Component, input, output } from '@angular/core';
import { IconsCardComponent } from "../icons-card/icons-card.component";
import sportIcons from '../../../../../../public/sport-icons.json';

@Component({
  selector: 'app-icons-library',
  imports: [IconsCardComponent],
  templateUrl: './icons-library.component.html',
  styleUrl: './icons-library.component.css',
})
export class IconsLibraryComponent {
  close = output<void>();

  iconNames: string[] = sportIcons.icons;

  handleClick(): void {
    this.close.emit();
  }
}
