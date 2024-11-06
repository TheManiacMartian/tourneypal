import { Apollo, gql } from 'apollo-angular';
import { Component, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select'
import { MatFormField } from '@angular/material/form-field'

import { TourneyManager } from '../tourney-manager';

interface PhaseOption{
  id: string;
  name: string;
}

const ALL_PHASE_QUERY = gql`
query AllPhases($slug: String!){
  event(slug: $slug){
    phases{
      name
      id
    }
  }
}
`

@Component({
  selector: 'app-phase-select',
  standalone: true,
  imports: [MatFormField, MatSelectModule],
  templateUrl: './phase-select.component.html',
  styleUrl: './phase-select.component.scss'
})
export class PhaseSelectComponent implements OnInit {
  selectedPhaseId = '';
  phases: PhaseOption[] = [];

  constructor(private readonly apollo: Apollo) {}

  ngOnInit(): void {
    // check if we already have an event
    if(TourneyManager.getEventSlug() != '')
    {
      this.getPhaseOptions(TourneyManager.getEventSlug());

      // also check if we have a bracket
      if(TourneyManager.getPhaseId() != '')
      {
        this.selectedPhaseId = TourneyManager.getPhaseId();
      }
    }

    // subscribe to event change event
    TourneyManager.onEventChanged = (eventSlug: string) => {
      if(!eventSlug)
      {
        // empty string, return and clear phases
        this.selectedPhaseId = '';
        this.phases = [];

        return;
      }

      // else we will update
      this.getPhaseOptions(eventSlug);
    }
  }

  getPhaseOptions(slug: string)
  {
    // query all events given the event slug
    // watch phase find query
    this.apollo.watchQuery({
      query: ALL_PHASE_QUERY,
      variables: {
        "slug": slug
      }
    })
    .valueChanges.subscribe((result: any) => {
      // make sure to clear the previous phases
      this.phases = [];

      // add each event to the events list
      result.data?.event.phases.forEach((phase: any) => {
        console.log(`found ${phase.name}`);
        this.phases.push({id: phase.id, name: phase.name});
      });
    });
  }

  updatePhase()
  {
    TourneyManager.setPhase(this.selectedPhaseId);
  }

}
