import { Component, OnInit } from '@angular/core';
import { RaceWinnerService } from './../race-winner.service';
import { Races } from '../races';


@Component({
  selector: 'app-winner-http-service',
  templateUrl: './winner-http-service.component.html',
  styleUrls: ['./winner-http-service.component.css'],
  providers: [RaceWinnerService]
})
export class WinnerHttpServiceComponent{
  title = "Winners of F1 Races season 2018";
  public Races : Races[];
  constructor(service: RaceWinnerService) {
    service.getRaces().subscribe(response => this.Races = response);
    }


}
