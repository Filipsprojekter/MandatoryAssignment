import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WinnerHttpServiceComponent } from './winner-http-service/winner-http-service.component';
import { RacewinnersComponent } from './racewinners/racewinners.component';


const routes: Routes = [
  {path: 'winner-http-service', component: WinnerHttpServiceComponent},
  {path: 'racewinners', component: RacewinnersComponent},
  {path: '', redirectTo: '/winner-http-service', pathMatch:'full'},
  {path: '**', component: WinnerHttpServiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
