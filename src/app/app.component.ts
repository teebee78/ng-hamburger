import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import {
  NineDotMenuComponent,
  MenuEntry,
} from "./nine-dot-menu/nine-dot-menu.component";
import { PopupMenuComponent } from "./popup-menu/popup-menu.component";
import { SettingsComponent } from "./settings/settings.component";

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  imports: [
    RouterOutlet,
    NineDotMenuComponent,
    PopupMenuComponent,
    SettingsComponent,
  ],
})
export class AppComponent {
  menuEnties: MenuEntry[] = [
    { icon: "tsunami", titleText: "Tsunami!" },
    { icon: "delete_forever" },
    { icon: "alarm" },
    { icon: "emoji_people" },
    { icon: "volcano" },
    { icon: "bolt" },
    { icon: "verified" },
    { icon: "bar_chart" },
    { icon: "precision_manufacturing" },
  ];
}
