import { Component, Input, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card'

@Component({
  selector: 'app-set-display',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './set-display.component.html',
  styleUrl: './set-display.component.scss'
})
export class SetDisplayComponent implements OnInit{
  @Input() set: any;

  hasDisplayScore = true;

  p1Name = '';
  p1Score = '';
  p2Name = '';
  p2Score = '';

  ngOnInit(): void {
      this.getScoresFromSet();
  }

  getScoresFromSet()
  {

    if(!this.set.displayScore)
    {
      this.hasDisplayScore = false;
      return;
    }

    var splitPlayers = this.set.displayScore.split('-');
    
    // make sure there is a player one entrant before continuing
    if(this.set.slots[0].entrant)
    {
      // the last digit is our score
      this.p1Score = splitPlayers[0].slice(-2, -1);
      this.p1Name = splitPlayers[0].slice(0, -3)
    }

    // make sure there is a player two entrant before continuing
    if(this.set.slots[1].entrant)
      {
        // the last digit is our score
        this.p2Score = splitPlayers[1].substring(splitPlayers[1].length-1, splitPlayers[1].length);
        this.p2Name = splitPlayers[1].slice(0, -2)
      }
    
  }
  
  
}
