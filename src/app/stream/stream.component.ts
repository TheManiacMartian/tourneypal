import { Component, inject } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatFabButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { StreamDataService } from '../stream-data.service';
import { FormGroup, FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

interface StreamPlayerData
{
  name: string,
  pronouns: string,
  score: number
}

@Component({
  selector: 'app-stream',
  standalone: true,
  imports: [MatSelectModule, MatInputModule, MatFormFieldModule, MatCardModule, MatAutocompleteModule, MatFabButton, MatIconModule, FormsModule],
  templateUrl: './stream.component.html',
  styleUrl: './stream.component.scss'
})
export class StreamComponent {

  setData: any = 
  {
    players: [
      {
          name: "Player 1",
          pronouns: "",
          score: 0
      },
      {
          name: "Player 2",
          pronouns: "",
          score: 0
      }
    ],
    tournament: "",
    event: "",
    round: "",
    bestOf: 3
  }

  private snackBar = inject(MatSnackBar);

  pronounOptions: string[] = ["He/Him", "She/Her", "They/Them"];

  constructor(private readonly streamData: StreamDataService)
  {
    streamData.getSetData().then((setData) => {
      console.log("Recieved set data:", setData);
      this.setData = setData;
    });
  }



  updateSetData()
  {
    // upload the data to the json
    this.streamData.updateSetData(this.setData).subscribe((response) => {
      console.log(response);
      this.snackBar.open("Updated data.", "Got it");
    })
  }
 
}
