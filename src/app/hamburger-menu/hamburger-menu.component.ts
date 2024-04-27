import { Component, HostListener, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

export type MenuEntry = {
  icon: string;
  titleText?: string;
}

@Component({
  selector: 'app-hamburger-menu',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './hamburger-menu.component.html',
  styleUrl: './hamburger-menu.component.scss'
})
export class HamburgerMenuComponent {

  entries = input.required<MenuEntry[]>();

  isExpanded = false;

  @HostListener('mouseenter')
  onMouseEnter() {
    this.isExpanded = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.isExpanded = false;
  }
}
