import { animate, style, transition, trigger } from "@angular/animations";
import { Component, input } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-popup-menu",
  standalone: true,
  imports: [MatIconModule],
  templateUrl: "./popup-menu.component.html",
  styleUrl: "./popup-menu.component.scss",
  animations: [
    trigger("fadeInOut", [
      transition(":enter", [
        style({ opacity: 0, height: 0}),
        animate("500ms ease", style({ opacity: 0.8, height: 'content'})),
      ]),
      transition(":leave", [
        animate("500ms ease", style({ opacity: 0, height: 0})),
      ]),
    ]),
  ],
})
export class PopupMenuComponent {
  icon = input.required<string>();
  isExpanded = false;

  public toggle(): void {
    this.isExpanded = !this.isExpanded;
  }
}
