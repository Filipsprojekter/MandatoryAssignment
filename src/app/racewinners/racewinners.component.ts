import { Component, OnInit } from '@angular/core';

import { Races } from '../races';
import { RaceWinnerService } from '../race-winner.service';

@Component({
  selector: 'app-racewinners',
  templateUrl: './racewinners.component.html',
  styleUrls: ['./racewinners.component.css'],
  providers: [RaceWinnerService]
})

export class RacewinnersComponent{
  selectedOption: string;
  public Races : Races[];
  

  constructor(private service : RaceWinnerService) {
   
   }

   onOptionSelected(value:string){
    this.service.getRacesWithVariable(value).subscribe(response => this.Races = response);
   }
    
   
    
}
