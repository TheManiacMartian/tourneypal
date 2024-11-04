import { Apollo, gql } from 'apollo-angular';
import { Component, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select'
import { MatFormField } from '@angular/material/form-field'
import { UserService } from '../user.service';

import { TourneyManager } from '../tourney-manager';

interface TournamentOption{
  id: string;
  name: string;
  slug: string;
}

const GET_ADMIN_TOURNEYS = gql`
query GetAdminTournaments($perPage: Int!, $currentUserId: ID!) {
  user(id: $currentUserId){
    tournaments(
      query:{
        perPage: $perPage,
        filter: {
          tournamentView: "admin"
        }
      }
    ) {
      nodes {
        id
        name
        slug
      }
    }
  }
}
`


@Component({
  selector: 'app-tourney-select',
  standalone: true,
  imports: [MatSelectModule, MatFormField],
  templateUrl: './tourney-select.component.html',
  styleUrl: './tourney-select.component.scss'
})
export class TourneySelectComponent implements OnInit {
  selectedTournamentSlug = '';
  tournaments: TournamentOption[] = [];

  constructor(private readonly apollo: Apollo, private readonly user: UserService) {}

  async ngOnInit() {
    console.log("Getting tournaments");

    // wait for auth id to be defined
    const authUser = await this.user.getAuthUser();
    console.log(authUser.currentUser.id);
    
    // watch tournament find query
    this.apollo.watchQuery({
      query: GET_ADMIN_TOURNEYS,
      variables: {
        "perPage": 50,
        "currentUserId": authUser.currentUser.id
      }
    })
    .valueChanges.subscribe((result: any) => {
      // add each tournament to the tournaments list
      result.data?.user.tournaments.nodes.forEach((tournament: any) => {
        console.log(`found ${tournament.name}`);
        this.tournaments.push({id: tournament.id, name: tournament.name, slug: tournament.slug});
      });
    });
  }

  updateTourney()
  {
    TourneyManager.setTourney(this.selectedTournamentSlug);
  }
}
