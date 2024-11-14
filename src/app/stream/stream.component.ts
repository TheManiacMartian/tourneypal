import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatFabButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import {MatAutocompleteModule} from '@angular/material/autocomplete';

interface StreamPlayerData
{
  name: string,
  pronouns: string,
  score: number
}

@Component({
  selector: 'app-stream',
  standalone: true,
  imports: [MatSelectModule, MatInputModule, MatFormFieldModule, MatCardModule, MatAutocompleteModule, MatFabButton, MatIconModule],
  templateUrl: './stream.component.html',
  styleUrl: './stream.component.scss'
})
export class StreamComponent {

  player1Data: StreamPlayerData = {name: "Player 1", pronouns: "", score: 0};
  player2Data: StreamPlayerData  = {name: "Player 2", pronouns: "", score: 0};
  tournamentName = "";
  eventName = "";
  roundName = "";
  bestOf = 3;


  pronounOptions: string[] = ["He/Him", "She/Her", "They/Them"];

}
