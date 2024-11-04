import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { MatSidenavContainer, MatSidenav, MatSidenavContent } from '@angular/material/sidenav'
import { MatFabButton } from '@angular/material/button'
import { TourneySelectComponent } from "./tourney-select/tourney-select.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, RouterLink, RouterLinkActive, MatSidenavContainer, MatSidenav, MatSidenavContent, MatFabButton, TourneySelectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'tourneypal';

  toggleSidenav()
  {
    
  }
}
