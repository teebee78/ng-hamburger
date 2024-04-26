import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-hamburger-menu-entry',
  standalone: true,
  imports: [],
  templateUrl: './hamburger-menu-entry.component.html',
  styleUrl: './hamburger-menu-entry.component.scss'
})
export class HamburgerMenuEntryComponent {

  icon = input.required();

  titleText = input();
}
