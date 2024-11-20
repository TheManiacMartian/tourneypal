import { Component, OnInit } from '@angular/core';
import { TourneyManager } from '../tourney-manager';
import { Apollo, gql } from 'apollo-angular';
import { MatSelectModule } from '@angular/material/select'
import { MatFormField } from '@angular/material/form-field'




interface EventOption{
  name: string;
  id: number;
  slug: string;
}

const ALL_EVENTS_QUERY = gql`
query AllEvents($slug: String!){
  tournament(slug: $slug){
    events{
      name
      id
      slug
    }
  }
}
`

@Component({
  selector: 'app-event-select',
  standalone: true,
  imports: [MatSelectModule, MatFormField],
  templateUrl: './event-select.component.html',
  styleUrl: './event-select.component.scss'
})
export class EventSelectComponent implements OnInit{

  selectedEventSlug = '';
  events: EventOption[] = [];


  constructor(private readonly apollo: Apollo) {}


  ngOnInit(): void {
    // subscribe to tournament change event
    TourneyManager.onTournamentChanged = (tourneySlug: string) => {
      if(!tourneySlug)
      {
        // empty string, return and clear events
        this.selectedEventSlug = '';
        this.events = [];

        return;
      }

      // else we will update
      this.getEventOptions(tourneySlug);
    }
  }


  getEventOptions(slug: string)
  {
    // query all events given the tournament slug
    // watch tournament find query
    this.apollo.watchQuery({
      query: ALL_EVENTS_QUERY,
      variables: {
        "slug": slug
      }
    })
    .valueChanges.subscribe((result: any) => {
      // make sure to clear the previous events
      this.events = [];

      // add each event to the events list
      result.data?.tournament.events.forEach((event: any) => {
        console.log(`found ${event.name}`);
        this.events.push({id: event.id, name: event.name, slug: event.slug});
      });
    });
  }

  updateEvent()
  {
    TourneyManager.setEvent(this.selectedEventSlug);
  }

}
