import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatFabButton, MatMiniFabButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [MatSelectModule, MatInputModule, MatFormFieldModule, MatCardModule, MatFabButton, MatIconModule, MatMiniFabButton],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

  overlayFilePath = ""

  setOverlayPath()
  {
    
  }

}
