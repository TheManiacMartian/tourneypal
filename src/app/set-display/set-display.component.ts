import { Component, Input, OnInit, inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card'
import { CommonModule } from '@angular/common';
import { MatMiniFabButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { StreamDataService } from '../stream-data.service';
import { TourneyManager } from '../tourney-manager';
import { Apollo, gql } from 'apollo-angular';
import { query } from '@angular/animations';
import { MatSnackBar } from '@angular/material/snack-bar';


const STREAM_DATA_QUERY = gql`
query StreamData($tourneySlug: String!, $eventSlug: String!){
  tournament(slug: $tourneySlug){
    name
    events(
      filter: {
        slug: $eventSlug
      }
    ){
      name
    }
  }
}
`


@Component({
  selector: 'app-set-display',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatMiniFabButton, MatIconModule],
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

  private snackBar = inject(MatSnackBar);


  constructor(private readonly streamData: StreamDataService, private readonly apollo: Apollo){}

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

  /** Set the stream data to match with this set */
  uploadSet()
  {
    // query data from tourney using tourney manager data
    this.apollo.watchQuery({
      query: STREAM_DATA_QUERY,
      variables:{
        "tourneySlug": TourneyManager.getTourneySlug(),
        "eventSlug": TourneyManager.getEventSlug()
      }
    }).valueChanges.subscribe((result: any) => {
      // make set data to send
      const setData =
      {
        set: 
        {
          players: [
            {
                name: this.p1Name,
                pronouns: "",
                score: this.p1Score
            },
            {
                name: this.p2Name,
                pronouns: "",
                score: this.p2Score
            }
          ],
          tournament: result.data.tournament.name,
          event: result.data.tournament.events[0].name,
          round: this.set.fullRoundText,
          bestOf: 3
        }
        
      }

      this.streamData.updateSetData(setData).then((value: any) => {
        console.log(value);
        this.snackBar.open("Updated data.", "Got it");
      });
    
    });
    
  }
  
}
