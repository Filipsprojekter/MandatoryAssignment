import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Races } from "./races";



interface IRacesData {
  MRData: { RaceTable: { Races: Races[] } };
}

@Injectable({
  providedIn: "root",
})
export class RaceWinnerService {
  constructor(private httpClient: HttpClient) {}

  public getRaces(): Observable<Races[]> {
    return this.httpClient
      .get<IRacesData>("https://ergast.com/api/f1/2018/results/1.json")
      .pipe(
        map((races) => {
          return races.MRData.RaceTable.Races.map((race) => {
              return {
              raceName: race.raceName,
              Results: race.Results,
            } as Races;
          });
        })
      );
  }

  public getRacesWithVariable(seasonYear: string): Observable<Races[]>{
    return this.httpClient
    .get<IRacesData>("https://ergast.com/api/f1/" + seasonYear + "/results/1.json")
    .pipe(
      map((races) => {
        return races.MRData.RaceTable.Races.map((race) => {
          return {
            raceName : race.raceName,
            Results: race.Results
          } as Races;
        })
      })
    )
    

  }  

 
}
