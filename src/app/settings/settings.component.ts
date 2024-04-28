import { Component } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatRadioModule} from '@angular/material/radio'; 
import {MatButtonToggleModule} from '@angular/material/button-toggle'; 

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [MatCheckboxModule, MatRadioModule, MatButtonToggleModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

}
