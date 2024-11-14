import { Component, Input, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-set-display',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './set-display.component.html',
  styleUrl: './set-display.component.scss'
})
export class SetDisplayComponent implements OnInit{
  @Input() set: any;

  setComplete = true;

  winner = '';

  p1Name = '';
  p1Score = '';
  p2Name = '';
  p2Score = '';

  ngOnInit(): void {
    this.getScoresFromSet();
  }

  getScoresFromSet()
  {

    // make sure there is a player one entrant before continuing
    if(this.set.slots[0].entrant)
    {
      // the last digit is our score
      this.p1Name = this.set.slots[0].entrant.name;
      
      // if the stats are null, default to 0
      if(!this.set.slots[0].standing)
      {
        this.p1Score = '0';
      }
      else
      {
        this.p1Score = this.set.slots[0].standing.stats.score.displayValue == '-1' ? 
        "DQ" : this.set.slots[0].standing.stats.score.displayValue;
      }
      
    }

    // make sure there is a player two entrant before continuing
    if(this.set.slots[1].entrant)
    {
      // the last digit is our score
      this.p2Name = this.set.slots[1].entrant.name;

      // if the stats are null, default to 0
      if(!this.set.slots[1].standing)
        {
          this.p2Score = '0';
        }
        else
        {
          this.p2Score = this.set.slots[1].standing.stats.score.displayValue == '-1' ? 
          "DQ" : this.set.slots[1].standing.stats.score.displayValue;
        }
    }

    // check if there is a result yet
    if(!this.set.displayScore)
    {
      //this.setComplete = false;
      return;
    }

    // get who won
    this.winner = this.set.slots[0].standing.stats.score.value > this.set.slots[1].standing.stats.score.value ?
      '1': // p1 won
      '2' // p2 won
    ;

    
    
    
  }
  
  
}
