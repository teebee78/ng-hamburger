import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HamburgerMenuComponent, MenuEntry } from "./hamburger-menu/hamburger-menu.component";

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  imports: [RouterOutlet, HamburgerMenuComponent],
})
export class AppComponent {

  menuEnties: MenuEntry[] = [
    { icon: "tsunami", titleText: "Tsunami!"},
    { icon: "delete_forever"},
    { icon: "alarm"},
    { icon: "emoji_people"},
    { icon: "volcano"},
    { icon: "bolt"},
    { icon: "verified"},
    { icon: "bar_chart"},
    { icon: "precision_manufacturing"},
  ];
}
