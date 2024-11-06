import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatFabButton } from '@angular/material/button';
import { MatActionList, MatListItem } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatFabButton, MatActionList, MatListItem,MatIconModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

}
