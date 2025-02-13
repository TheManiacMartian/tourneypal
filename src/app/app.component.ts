import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { MatSidenavContainer, MatSidenav, MatSidenavContent } from '@angular/material/sidenav'
import { MatFabButton } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { TourneySelectComponent } from "./tourney-select/tourney-select.component";
import { EventSelectComponent } from "./event-select/event-select.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, RouterLink, RouterLinkActive, MatSidenavContainer, MatSidenav, MatSidenavContent, MatFabButton, TourneySelectComponent, EventSelectComponent, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'tourneypal';

  toggleSidenav()
  {
    
  }
}
