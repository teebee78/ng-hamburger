import { Component, HostListener, contentChildren, signal } from '@angular/core';
import { HamburgerMenuEntryComponent } from '../hamburger-menu-entry/hamburger-menu-entry.component';

@Component({
  selector: 'app-hamburger-menu',
  standalone: true,
  imports: [],
  templateUrl: './hamburger-menu.component.html',
  styleUrl: './hamburger-menu.component.scss'
})
export class HamburgerMenuComponent {

  entries = contentChildren(HamburgerMenuEntryComponent);

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
