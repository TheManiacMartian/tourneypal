import { Component } from '@angular/core';
import { PhaseSelectComponent } from '../phase-select/phase-select.component';
import { BracketDisplayComponent } from '../bracket-display/bracket-display.component';

@Component({
  selector: 'app-bracket',
  standalone: true,
  imports: [PhaseSelectComponent, BracketDisplayComponent],
  templateUrl: './bracket.component.html',
  styleUrl: './bracket.component.scss'
})
export class BracketComponent {

}
