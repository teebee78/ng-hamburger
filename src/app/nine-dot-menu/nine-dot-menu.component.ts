import { Component, HostListener, input } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";

export type MenuEntry = {
  icon: string;
  titleText?: string;
};

@Component({
  selector: "app-hamburger-menu",
  standalone: true,
  imports: [MatIconModule],
  templateUrl: "./nine-dot-menu.component.html",
  styleUrl: "./nine-dot-menu.component.scss",
})
export class NineDotMenuComponent {
  entries = input.required<MenuEntry[]>();

  isExpanded = false;

  @HostListener("mouseenter")
  onMouseEnter() {
    this.isExpanded = true;
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    this.isExpanded = false;
  }
}
