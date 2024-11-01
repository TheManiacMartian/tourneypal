import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatFabButton } from '@angular/material/button';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatFabButton],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

}
