import { Apollo, gql } from 'apollo-angular';
import { Component, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select'
import { MatFormField } from '@angular/material/form-field'

interface Tournament{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-tourney-select',
  standalone: true,
  imports: [MatSelectModule, MatFormField],
  templateUrl: './tourney-select.component.html',
  styleUrl: './tourney-select.component.scss'
})
export class TourneySelectComponent implements OnInit {
  testSelected = null;
  tournaments: Tournament[] = [];

  constructor(private readonly apollo: Apollo) {}

  ngOnInit(): void {
    console.log("Getting tournaments");

    // watch tournament find query
    this.apollo.watchQuery({
      query: gql`
        query GetAllTournaments($perPage: Int!, $cCode: String!) {
          tournaments(query: {
            perPage: $perPage
            filter: {
              countryCode: $cCode
            }
          }) {
            nodes {
              id
              name
              slug
            }
          }
        }
      `,
      variables: {
        "perPage": 100,
        "cCode": "CA"
      }
    })
    .valueChanges.subscribe((result: any) => {
      result.data?.tournaments.nodes.forEach((tournament: any) => {
        console.log(`found ${tournament.name}`);
        this.tournaments.push({value: tournament.id, viewValue: tournament.name});
      });
      
    });
  }
}
