import { Component, HostListener, contentChildren, input, signal } from '@angular/core';

export type MenuEntry = {
  icon: string;
  titleText?: string;
}

@Component({
  selector: 'app-hamburger-menu',
  standalone: true,
  imports: [],
  templateUrl: './hamburger-menu.component.html',
  styleUrl: './hamburger-menu.component.scss'
})
export class HamburgerMenuComponent {

  entries = input.required<MenuEntry[]>();

  isExpanded = signal(false);

  @HostListener('mouseenter')
  onMouseEnter() {
    this.isExpanded.set(true);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.isExpanded.set(false)
  }

}
