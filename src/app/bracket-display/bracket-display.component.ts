import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';


import { TourneyManager } from '../tourney-manager';
import { SetDisplayComponent } from "../set-display/set-display.component";


export interface SetDisplay{
  id: number;
  slots: any[];
  fullRoundText: string;
  displayScore: string;
}

const ALL_SETS_QUERY = gql`
query AllSets($phaseId: ID!){
  phase(id: $phaseId){
    name
    id
    sets(perPage: 100){
      nodes{
        id
        fullRoundText
        displayScore
        slots{
          id
          entrant{
            id
            name
          }
        }
      }
    }
  }
}
`


@Component({
  selector: 'app-bracket-display',
  standalone: true,
  imports: [SetDisplayComponent],
  templateUrl: './bracket-display.component.html',
  styleUrl: './bracket-display.component.scss'
})
export class BracketDisplayComponent implements OnInit {

  sets: SetDisplay[] = [];

  constructor(private readonly apollo: Apollo) {}
  

  ngOnInit(): void {
      // if there is a phase selected, get the sets
      if(TourneyManager.getPhaseId() != '')
      {
        this.getSets(TourneyManager.getPhaseId());
      }

      // subscribe to the phase set event, so we can get the sets for the new phase
      TourneyManager.onPhaseChanged = ((phaseId: string) => {
        if(!phaseId)
        {
          // empty string, return and clear events
          this.sets = [];
  
          return;
        }
  
        // else we will update
        this.getSets(phaseId);
      });
  }

  getSets(phaseId: string)
  {
    // query all sets
    this.apollo.watchQuery({
      query: ALL_SETS_QUERY,
      variables: {
        "phaseId": phaseId
      }
    })
    .valueChanges.subscribe((result: any) => {
      // make sure to clear the previous sets
      this.sets = [];

      var sets = result.data?.phase.sets.nodes

      // add each set to the sets list
      for(var set in sets)
      {
        console.log(sets[set].slots);
        this.sets.push({id: sets[set].id, slots: sets[set].slots, fullRoundText: sets[set].fullRoundText, displayScore: sets[set].displayScore})
      }
    });
  }
}
