import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HamburgerMenuComponent } from "./hamburger-menu/hamburger-menu.component";
import { HamburgerMenuEntryComponent } from "./hamburger-menu-entry/hamburger-menu-entry.component";

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  imports: [RouterOutlet, HamburgerMenuComponent, HamburgerMenuEntryComponent],
})
export class AppComponent {
  title = "ng-hamburger";
}
